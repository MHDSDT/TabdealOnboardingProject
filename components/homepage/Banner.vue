<template>
  <section class="bg-[#1a1c1f] block py-24 w-full h-[400px]">
    <div class="container mx-auto w-full sm:w-9/12 lg:w-7/12">
      <div
        class="flex flex-col items-center justify-center space-y-6 text-white"
      >
        <h1
          class="font-medium text-center text-4xl sm:text-5xl w-11/12 sm:w-10/12 md:w-full"
        >
          صرافی ارز دیجیتال تبدیل
        </h1>
        <p class="text-center text-[#cacccf] text-sm md:text-lg">
          خرید و فروش امن و آسان به‌روزترین ارزهای دیجیتال جهان
        </p>
        <div v-if="isLoggedIn">
          <button class="btn btn-primary btn-lg flex gap-2">
            پنل کاربری
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="w-5 w-5 fill-current stroke-2"
            >
              <path :d="mdiArrowLeft"></path>
            </svg>
          </button>
        </div>
        <form
          @submit.prevent="checkExistenceOfUser()"
          action="#"
          method="POST"
          v-else
          class="relative flex sm:flex-row flex-col items-center justify-center w-11/12 sm:w-auto"
        >
          <input
            class="text-black input input-lg w-full sm:w-[400px] mb-4 sm:mb-0 sm:ml-4"
            placeholder="شماره همراه خود را وارد کنید."
            v-model="enteredPhoneNumber"
            required
          />
          <button type="submit" class="btn btn-lg btn-primary w-full sm:w-auto">
            همین حالا ثبت نام کنید
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js";
import User from "~/assets/js/User.js";

export default {
  name: "Banner",
  data() {
    return {
      mdiArrowLeft,
      enteredPhoneNumber: "",
      userClass: User,
    };
  },
  computed: {
    isLoggedIn() {
      if (process.client) {
        return localStorage.isLoggedIn;
      } else {
        return false;
      }
    },
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
        localStorage.push("/auth/register");
      }
    },
  },
};
</script>

<style scoped></style>
