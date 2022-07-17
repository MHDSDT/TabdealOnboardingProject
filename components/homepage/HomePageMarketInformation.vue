<template>
  <div class="bg-white flex justify-center p-3 sm:pb-20 sm:px-5 pt-0">
    <div
      class="card w-full bg-white sm:shadow-xl sm:w-[900px] sm:-mt-8 md:-mt-16"
    >
      <div class="card-body text-black">
        <h1 class="text-4xl font-medium mb-2">
          خرید و فروش بیش از ۹۰ ارز دیجیتال
        </h1>
        <p class="text-sm">
          شما در تبدیل فقط چند کلیک با خرید و فروش ارز‌های دیجیتال دلخواه خود
          فاصله دارید
        </p>

        <MarketInformation :number-of-rows="7" :is-limited="true" />

        <div class="card-actions justify-center">
          <NuxtLink
            class="flex flex-row p-2 hover:rounded hover:bg-[#f7f7f7] text-center text-sm text-[#999a9d] w-auto hover:cursor-pointer"
            to="/markets-overview"
          >
            مشاهده تمام بازارها
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="mt-0.5 mr-2 text-slate-400 fill-current"
            >
              <path
                d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageMarketInformation",
};
</script>

<style scoped></style>
