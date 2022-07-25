<template>
  <div class="flex flex-col gap-4">
    <h1 class="font-bold text-2xl text-black">کارمزد معاملات</h1>
    <div v-for="item in items" class="flex items-center gap-2">
      <img :src="item.imgPath" class="w-12 sm:w-16 md:w-20 lg:w-auto" />
      <p class="text-justify first:w-4/5">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommissionGeneralInfo",
  data() {
    return {
      items: [
        {
          description:
            "کارمزد از ارزی که پس از معامله دریافت می‌کنید کسر می‌شود. به‌عنوان مثال اگر شما بخواهید با تومان، بیت کوین بخرید، کارمزد شما از بیت کوینِ دریافتی شما کسر می‌شود و یا اگر به‌عنوان فروشنده بخواهید بیت کوین خود را به فروش برسانید، کارمزد از تومانی که دریافت می‌نمایید کسر می‌شود.",
          imgPath: "/images/commission/national-commission.svg",
        },
        {
          description:
            "کارمزد به‌صورت درصدی از کل مبلغ معامله در نظر گرفته می‌شود.",
          imgPath: "/images/commission/percent.svg",
        },
        {
          description:
            "در هنگام ثبت سفارش خرید و یا سفارش فروش، کارمزد معامله به شما نمایش داده می‌شود.",
          imgPath: "/images/commission/buy-sell.svg",
        },
        {
          description: "سطح کارمزد فعلی شما در قسمت داشبورد قابل مشاهده است.",
          imgPath: "/images/commission/trader-level.svg",
        },
        {
          description:
            "کارمزد پرداختی و جزئیات معاملات شما، در قسمت سفارشات، قابل مشاهده خواهد بود.",
          imgPath: "/images/commission/invoice.svg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
