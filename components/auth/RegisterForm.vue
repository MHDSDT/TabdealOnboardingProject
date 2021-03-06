<template>
  <div
    class="m-10 -mt-12 sm:mx-20 h-full flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8 text-black"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="flex flex-col gap-2">
        <h2 class="mt-6 text-2xl">ثبت نام</h2>
        <div class="flex text-gray-500">
          {{ phoneNumber }}&nbsp;
          <svg
            class="h-5 w-5 fill-current hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            @click="editPhoneNumber"
          >
            <path :d="mdiPencil" />
          </svg>
        </div>
      </div>
      <form
        class="space-y-6"
        action="#"
        method="POST"
        @submit.prevent="createUser"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center">
            <label for="password" class="sr-only">رمز عبور</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="inputPassword"
              ref="password"
              required
              class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
              placeholder="رمز عبور خود را تعیین نمایید"
            />
            <svg
              class="h-8 w-8 fill-current -mr-11 hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              @click="togglePasswordVisibility('password')"
            >
              <path :d="isPasswordHidden ? mdiEyeOff : mdiEye" />
            </svg>
          </div>

          <div
            class="flex flex-col text-sm text-gray-500 gap-2 pr-4 my-4 font-light"
          >
            <p
              v-for="(prop, index) in passwordProperties"
              :key="prop.title"
              class="flex gap-2"
            >
              <svg
                :class="getPasswordPropertiesClasses(index)"
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  :d="
                    prop.booleanProperty
                      ? mdiCheckboxMarkedOutline
                      : mdiCropSquare
                  "
                />
              </svg>
              {{ prop.title }}
            </p>
          </div>

          <div class="flex items-center">
            <label for="password-confirmation" class="sr-only"
              >تایید رمز عبور</label
            >
            <input
              id="password-confirmation"
              name="password-confirmation"
              type="password"
              v-model="inputPasswordConfirmation"
              ref="password-confirmation"
              required
              class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
              placeholder="رمز عبور خود را دوباره وارد کنید"
            />
            <svg
              class="h-8 w-8 fill-current -mr-11 hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              @click="togglePasswordVisibility('password-confirmation')"
            >
              <path :d="isPasswordConfirmationHidden ? mdiEyeOff : mdiEye" />
            </svg>
          </div>
        </div>

        <div ref="createUserButton">
          <button type="submit" :class="disabledButtonClasses">
            ساخت حساب کاربری
          </button>
        </div>
      </form>
    </div>
    <!--    <input type="checkbox" id="modal" class="modal-toggle" />-->
    <!--    <label for="modal" class="modal cursor-pointer">-->
    <!--      <label class="modal-box relative" for="">-->
    <!--        <p class="py-4">ثبت نام با موفقیت انجام شد.</p>-->
    <!--      </label>-->
    <!--    </label>-->
  </div>
</template>

<script>
import {
  mdiCropSquare,
  mdiCheckboxMarkedOutline,
  mdiEye,
  mdiEyeOff,
  mdiPencil,
} from "@mdi/js";
import User from "@/assets/js/User.js";

export default {
  name: "Register",
  data() {
    return {
      mdiCheckboxMarkedOutline,
      mdiCropSquare,
      mdiEye,
      mdiEyeOff,
      mdiPencil,
      isAtLeastEightChars: false,
      doesHaveUpperCase: false,
      doesHaveNumber: false,
      doesHaveLowerCase: false,
      doesPasswordsMatch: false,
      inputPassword: "",
      inputPasswordConfirmation: "",
      isPasswordHidden: true,
      isPasswordConfirmationHidden: true,
      passwordProperties: [
        {
          title: "حداقل ۸ کاراکتر",
          booleanProperty: this.isAtLeastEightChars,
        },
        {
          title: "دارای حداقل یک حرف بزرگ",
          booleanProperty: this.doesHaveUpperCase,
        },
        {
          title: "دارای حداقل یک عدد",
          booleanProperty: this.doesHaveNumber,
        },
        {
          title: "دارای حداقل یک حرف کوچک",
          booleanProperty: this.doesHaveLowerCase,
        },
      ],
      disabledButtonClasses:
        "btn btn-disabled bg-gray-200 text-gray-400 border-none w-full",
      primaryButtonClasses: "btn btn-primary modal-button w-full",
    };
  },
  watch: {
    inputPassword() {
      const hasUpperCase = /[A-Z]/;
      const hasNumber = /\d/;
      const hasLowerCase = /[a-z]/;

      this.isAtLeastEightChars = this.inputPassword.length >= 8;
      this.doesHaveUpperCase = hasUpperCase.test(this.inputPassword);
      this.doesHaveNumber = hasNumber.test(this.inputPassword);
      this.doesHaveLowerCase = hasLowerCase.test(this.inputPassword);

      this.getCreateUserButtonClasses();
    },
    inputPasswordConfirmation() {
      this.doesPasswordsMatch =
        this.inputPassword === this.inputPasswordConfirmation;

      this.getCreateUserButtonClasses();
    },
    isAtLeastEightChars() {
      this.passwordProperties[0].booleanProperty = this.isAtLeastEightChars;
    },
    doesHaveUpperCase() {
      this.passwordProperties[1].booleanProperty = this.doesHaveUpperCase;
    },
    doesHaveNumber() {
      this.passwordProperties[2].booleanProperty = this.doesHaveNumber;
    },
    doesHaveLowerCase() {
      this.passwordProperties[3].booleanProperty = this.doesHaveLowerCase;
    },
  },
  methods: {
    editPhoneNumber() {
      this.$router.push("/auth/register-req");
    },
    togglePasswordVisibility(ref) {
      const el = this.$refs[ref];

      el.type = el.type === "password" ? "text" : "password";

      if (ref === "password") {
        this.isPasswordHidden = !this.isPasswordHidden;
      } else {
        this.isPasswordConfirmationHidden = !this.isPasswordConfirmationHidden;
      }
    },
    getCreateUserButtonClasses() {
      const button = this.$refs.createUserButton.childNodes[0];
      if (
        this.isAtLeastEightChars &&
        this.doesHaveUpperCase &&
        this.doesHaveNumber &&
        this.doesHaveLowerCase &&
        this.doesPasswordsMatch
      ) {
        button.classList.value = this.primaryButtonClasses;
      } else button.classList.value = this.disabledButtonClasses;
    },
    createUser() {
      new User(this.$store.state.tmpPhoneNumber, this.inputPassword);
      this.$store.commit("setIsLoggedIn", true);
      this.$router.push("/");
    },
    getPasswordPropertiesClasses(index) {
      const fillCurrent = "fill-current";
      const green = "fill-green-400";
      switch (index) {
        case 0:
          return this.isAtLeastEightChars ? green : fillCurrent;
        case 1:
          return this.doesHaveUpperCase ? green : fillCurrent;
        case 2:
          return this.doesHaveNumber ? green : fillCurrent;
        case 3:
          return this.doesHaveLowerCase ? green : fillCurrent;
      }
    },
  },
  computed: {
    phoneNumber() {
      return this.$store.state.tmpPhoneNumber;
    },
  },
};
</script>

<style scoped></style>
