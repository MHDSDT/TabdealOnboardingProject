<template>
  <section class="hero py-12 lg:py-16 bg-zinc-900">
    <div class="hero-content flex-col">
      <h1 class="text-4xl font-medium text-white text-center">
        همه جا در دسترس شما
      </h1>
      <img
        height="16px"
        width="72px"
        src="https://tabdeal.org//images/homepage/new-content/spacer.svg"
        alt="spacer"
      />
      <p class="py-4 text-white text-center">
        با اپلیکیشن موبایل حرفه‌ای تبدیل، به سادگی و در هر شرایطی خرید و فروش
        امن ارز‌های دیجیتال را تجربه کنید!
      </p>
      <button class="btn btn-primary btn-lg gap-2">
        دانلود اپلیکیشن تبدیل
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          class="mt-1 mr-2"
        >
          <path :d="mdiArrowDown"></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { mdiArrowDown } from "@mdi/js";

export default {
  name: "ApplicationPresentation",
  data() {
    return {
      mdiArrowDown,
    };
  },
};
</script>

<style scoped></style>
