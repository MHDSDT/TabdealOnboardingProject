<template>
  <div class="navbar bg-black px-5">
    <div class="navbar-start w-full">
      <NuxtLink to="/" class="flex items-center ml-4">
        <img
          src="https://tabdeal.org/tabdeal-logo-dark.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Tabeal Logo"
        />
      </NuxtLink>
      <div class="hidden lg:flex text-xs">
        <ul class="flex flex-row gap-4 justify-items-center items-center">
          <li tabindex="0">
            <button class="btn btn-outline btn-sm text-xs">
              خرید و فروش
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path :d="mdiMenuDown" />
              </svg>
            </button>
          </li>
          <li>
            <a class="btn btn-outline btn-primary btn-sm text-xs">خرید آسان</a>
          </li>
          <li><a class="ml-2">راهنمای گام به گام</a></li>
          <li><a>درآمد رایگان</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <div v-if="!userClass.isLoggedIn" class="flex">
        <NuxtLink
          to="/auth/login-req"
          class="btn btn-primary btn-sm btn-ghost ml-2"
          >ورود
        </NuxtLink>
        <NuxtLink to="/auth/register-req" class="btn btn-primary btn-sm ml-2"
          >ثبت‌نام
        </NuxtLink>
      </div>

      <div v-else class="navbar-end flex items-center justify-center">
        <button class="btn btn-primary btn-sm btn-ghost ml-2" dir="ltr">
          <svg
            class="w-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path :d="mdiMenuDown" />
          </svg>
          {{ userClass.loggedInUser.phoneNumber | hidePhoneNumber }}
        </button>

        <button @click="logOut" class="btn btn-error btn-sm ml-2 text-white">
          خروج
        </button>
      </div>

      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path :d="mdiMenu" />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiMenuDown, mdiMenu } from "@mdi/js";
import User from "@/assets/js/User.js";

export default {
  name: "TheHeader",
  data() {
    return {
      mdiMenuDown,
      mdiMenu,
      userClass: User,
    };
  },
  methods: {
    logOut() {
      this.userClass.isLoggedIn = false;
      this.userClass.loggedInUser = null;
    },
  },
  filters: {
    hidePhoneNumber(value) {
      if (value.length < 11) return "";
      return value.slice(0, 4) + "****" + value.slice(8);
    },
  },
};
</script>

<style scoped></style>
