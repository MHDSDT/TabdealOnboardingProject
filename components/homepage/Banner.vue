<template>
  <section class="bg-[#1a1c1f] block py-24 w-full h-[400px]">
    <div class="container mx-auto w-full sm:w-9/12 lg:w-7/12" dir="rtl">
      <div class="flex flex-col items-center justify-center space-y-6 text-white">
        <h1 class="text-center text-4xl sm:text-5xl w-11/12 sm:w-10/12 md:w-full">
          صرافی ارز دیجیتال تبدیل</h1>
        <p class="text-center text-[#cacccf] text-sm md:text-lg">
          خرید و فروش امن و آسان به‌روزترین ارزهای دیجیتال جهان
        </p>
        <div class="relative flex sm:flex-row flex-col items-center justify-center w-11/12 sm:w-auto">
          <input class="p-4 rounded sm:ml-4 sm:mb-0 mb-4 w-full sm:w-auto focus:border-red-900" placeholder="شماره همراه خود را وارد کنید."
                 required>
          <button
            class="p-4 rounded bg-yellow-500 hover:bg-[#e0ac0c] font-medium text-center
            text-black w-full sm:w-auto">
            همین حالا ثبت نام کنید
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
</style>
