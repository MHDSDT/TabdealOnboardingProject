<template>
  <div
    class="flex flex-col justify-center lg:flex-row p-16 bg-zinc-100 gap-8 lg:gap-0 min-h-screen"
  >
    <div class="flex flex-col justify-center items-center lg:items-start gap-4">
      <h1 class="text-9xl font-bold text-gray-400 mb-6">۴۰۴</h1>
      <h2 class="text-2xl font-bold text-black mb-2">
        صفحه‌ای که دنبالش بودید یافت نشد...
      </h2>
      <p class="text-black mb-8 text-lg text-center lg:text-start">
        در صورتی که از صحت آدرس صفحه اطمینان دارید، به پشتیبانی اطلاع بدهید.
      </p>
      <NuxtLink class="btn btn-primary rounded drop-shadow-lg gap-2" to="/">
        بازگشت به صفحه اصلی
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          class="mt-1 mr-2"
        >
          <path :d="mdiKeyboardBackspace"></path>
        </svg>
      </NuxtLink>
    </div>

    <div class="lg:w-3/5 flex items-center">
      <img
        class="z-0"
        src="/images/404-page/tabdeal-404.svg"
        alt="tabdeal-404"
      />
    </div>
  </div>
</template>

<script>
import { mdiKeyboardBackspace } from "@mdi/js";

export default {
  name: "NotFoundErrorPage",
  data() {
    return {
      mdiKeyboardBackspace,
    };
  },
  head() {
    const title = "تبدیل | ‌۴۰۴، صفحه مورد نظر شما یافت نشد";
    return {
      title,
    };
  },
  meta: {
    footerDisplay: true,
  },
};
</script>

<style scoped></style>
