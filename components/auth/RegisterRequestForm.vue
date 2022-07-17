<template>
  <div
    class="m-10 -mt-12 sm:mx-20 h-full flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8 text-black"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="flex flex-col gap-6">
        <h1 class="text-2xl">
          به
          <b> تبدیل </b>
          خوش آمدید
        </h1>
        <h2 class="text-2xl">ثبت نام</h2>
        <div class="text-sm text-gray-600 text-justify">
          <svg
            class="h-5 w-5 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path :d="mdiInformationOutline" />
          </svg>
          در صورت ثبت نام با شماره‌ موبایل به نام خود، فرایند احرازهویت شما
          تسریع می‌گردد.
        </div>
      </div>
      <form
        class="space-y-6"
        @submit.prevent="checkExistenceOfUser()"
        action="#"
        method="POST"
      >
        <div>
          <label for="phone" class="sr-only">شماره همراه</label>
          <input
            v-model="enteredPhoneNumber"
            id="phone"
            name="email"
            type="tel"
            required
            class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
            placeholder="شماره همراه خود را وارد کنید."
          />
        </div>

        <div>
          <button type="submit" class="btn btn-primary w-full">
            ادامه فرایند ثبت نام
          </button>
        </div>
      </form>
      <div class="flex flex-row items-center gap-4">
        <p class="text-sm text-gray-600">قبلا حساب کاربری ساخته‌اید؟</p>
        <NuxtLink
          to="/auth/login-req"
          class="btn btn-ghost btn-outline btn-sm rounded-md"
        >
          ورود
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiInformationOutline } from "@mdi/js";
import User from "@/assets/js/User.js";

export default {
  name: "Register",
  data() {
    return {
      mdiInformationOutline,
      enteredPhoneNumber: "",
    };
  },
  methods: {
    checkExistenceOfUser() {
      const phoneNumberFormat = /^([0-9]{10})$|^([0-9]{11})$/;
      if (!this.enteredPhoneNumber.match(phoneNumberFormat)) return;
      if (User.allUsers[this.enteredPhoneNumber] !== undefined) {
        this.$router.push("/auth/login-req");
      } else {
        localStorage.tmpPhoneNumber = this.enteredPhoneNumber;
        console.log(`tmpPhoneNumber is ${localStorage.tmpPhoneNumber}`);
        this.$router.push("/auth/register");
      }
    },
  },
};
</script>

<style scoped></style>
