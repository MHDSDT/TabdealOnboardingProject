<template>
  <section class="bg-zinc-100 text-gray-800 p-10 text-center md:text-start">
    <div
      class="flex flex-col justify-center items-center justify-stretch gap-8"
    >
      <h1 class="font-bold text-4xl">
        بهترین سبد ارز دیجیتال برای سرمایه گذاری بلند مدت
      </h1>
      <p class="text-sm max-w-[800px]">
        در ابتدای سال ۱۴۰۱، صرافی ارز دیجیتال تبدیل، یک سبد ارز دیجیتال مناسب
        برای سرمایه گذاری بلند مدت را معرفی می‌کند. سبد ارز دیجیتال تبدیل،
        مجموعه‌ای مشخص از ارزهای دیجیتال است که ترکیبی درست برای سرمایه گذاری
        بلند مدت را پیشنهاد می‌کند.
      </p>
      <div class="flex flex-col md:flex-row gap-16 justify-center items-center">
        <div class="flex flex-col gap-8">
          <h1 class="text-xl">
            برای مشاهده این سبد ارز دیجیتال، ثبت‌نام کنید:
          </h1>
          <NuxtLink
            to="/auth/register"
            class="btn btn-primary btn-lg text-2xl rounded-2xl drop-shadow-xl"
            >ثبت نام و مشاهده سبد
          </NuxtLink>
          <div class="flex flex-row items-center gap-4">
            <p class="text-sm text-gray-600">قبلا ثبت‌نام کردید؟</p>
            <NuxtLink
              to="/auth/login-req"
              class="btn btn-ghost btn-outline btn-sm rounded-md"
            >
              ورود به حساب کاربری
            </NuxtLink>
          </div>

          <div class="bg-gray-200 rounded-xl p-6 flex flex-col gap-4">
            <div v-for="property in properties" class="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-violet-900"
              >
                <path :d="property.iconSvgCode"></path>
              </svg>
              <p>{{ property.title }}</p>
            </div>
          </div>
        </div>
        <img
          src="/images/longterm-portfolio/longterm-coins.webp"
          alt="سبد سرمایه‌گذاری ارز دیجیتال"
          class="w-1/2 h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "1401-longterm-portfolio",
  data() {
    return {
      properties: [
        {
          title: "بیشترین تنوع ارزی",
          iconSvgCode:
            "M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18M3,12C3,14.61 4.67,16.83 7,17.65V19.74C3.55,18.85 1,15.73 1,12C1,8.27 3.55,5.15 7,4.26V6.35C4.67,7.17 3,9.39 3,12Z",
        },
        {
          title: "حداقل فاصله خرید و فروش",
          iconSvgCode:
            "M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z",
        },
        {
          title: "ابزار حرفه‌ای معامله",
          iconSvgCode:
            "M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z",
        },
        {
          title: "احراز هویت سریع",
          iconSvgCode:
            "M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M11,4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4M11,6A2,2 0 0,0 9,8A2,2 0 0,0 11,10A2,2 0 0,0 13,8A2,2 0 0,0 11,6M11,13C11.68,13 12.5,13.09 13.41,13.26L11.74,14.93L11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H11.1L13,20H3V17C3,14.34 8.33,13 11,13Z",
        },
      ],
    };
  },
  layout: "auth",
};
</script>

<style scoped></style>
