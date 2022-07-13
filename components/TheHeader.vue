<template>
  <div class="navbar bg-black px-5" dir="rtl">
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
      <a href="#" class="btn btn-primary btn-sm btn-ghost ml-2">ورود</a>
      <a href="#" class="btn btn-primary btn-sm ml-2">ثبت‌نام</a>

      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiMenuDown } from "@mdi/js";

export default {
  name: "TheHeader",
  data() {
    return {
      mdiMenuDown,
    };
  },
};
</script>

<style scoped></style>
