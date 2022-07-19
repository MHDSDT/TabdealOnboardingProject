<template>
  <div class="navbar bg-black px-5">
    <div class="navbar-start w-full">
      <NuxtLink to="/" class="flex items-center ml-4">
        <img
          src="https://tabdeal.org/tabdeal-logo-dark.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Tabdeal Logo"
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
          <li>
            <a class="btn btn-sm font-normal text-xs btn-ghost l-2"
              >راهنمای گام به گام</a
            >
          </li>
          <li>
            <a class="btn btn-sm font-normal text-xs btn-ghost">درآمد رایگان</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-end">
      <div v-if="isLoggedIn" class="flex items-center justify-center">
        <button class="btn btn-primary btn-sm btn-ghost ml-2" dir="ltr">
          <svg
            class="w-5 w-5 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path :d="mdiMenuDown" />
          </svg>
          <!--          <svg-->
          <!--            class="w-8 w-8 mr-2 fill-current"-->
          <!--            xmlns="http://www.w3.org/2000/svg"-->
          <!--            viewBox="0 0 24 24"-->
          <!--          >-->
          <!--            <path :d="mdiAccountCircleOutline" />-->
          <!--          </svg>-->
          {{ phoneNumber | hidePhoneNumber }}
        </button>

        <button @click="logOut" class="btn btn-error btn-sm ml-2 text-white">
          خروج
        </button>
      </div>

      <div v-else class="flex">
        <NuxtLink
          to="/auth/login-req"
          class="btn btn-primary btn-sm btn-ghost ml-2"
          >ورود
        </NuxtLink>
        <NuxtLink to="/auth/register-req" class="btn btn-primary btn-sm ml-2"
          >ثبت‌نام
        </NuxtLink>
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
import { mdiMenuDown, mdiMenu, mdiAccountCircleOutline } from "@mdi/js";
import User from "@/assets/js/User.js";

export default {
  name: "TheHeader",
  data() {
    return {
      mdiMenuDown,
      mdiMenu,
      mdiAccountCircleOutline,
      userClass: User,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    phoneNumber() {
      return this.$store.state.tmpPhoneNumber;
    },
  },
  methods: {
    logOut() {
      this.$store.commit("setIsLoggedIn", false);
      this.$store.commit("setTmpPhoneNumber", "");
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
