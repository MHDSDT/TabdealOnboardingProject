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
        <!--        <Title font-size="5xl" :is-dark=true :is-important=false text-align="center" font-weight="bold">صرافی ارز دیجیتال تبدیل</Title>-->
        <p class="text-center text-[#cacccf] text-sm md:text-lg">
          خرید و فروش امن و آسان به‌روزترین ارزهای دیجیتال جهان
        </p>
        <div
          class="relative flex sm:flex-row flex-col items-center justify-center w-11/12 sm:w-auto"
        >
          <input
            class="input input-lg w-full sm:w-[400px] mb-4 sm:mb-0 sm:ml-4"
            placeholder="شماره همراه خود را وارد کنید."
            required
          />
          <button class="btn btn-lg btn-primary w-full sm:w-auto">
            همین حالا ثبت نام کنید
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/general/Title";

export default {
  name: "Banner",
  components: {
    Title,
  },
};
</script>

<style scoped></style>
