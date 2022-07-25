<template>
  <div
    class="text-black bg-white h-screen w-full flex justify-center items-center flex-col md:flex-row md:justify-center md:align-center"
  >
    <div class="flex flex-col justify-center items-center">
      <img
        src="/images/under-maintenance/under-maintenance.png"
        alt="under-maintenance-image"
        class="hidden md:block"
      />
      <img
        src="/images/under-maintenance/under-maintenance.png"
        alt="under-maintenance-image"
        class="block md:hidden"
        width="70%"
      />
    </div>
    <div class="hidden md:flex flex-col justify-center pr-14 gap-4">
      <h1 class="font-bold text-3xl">سایت در حال بروزرسانی فنی می‌باشد</h1>
      <p>تا ساعت 2:30 برمی‌گردیم. از صبوری شما سپاسگذاریم.</p>
      <img
        src="/images/under-maintenance/under-maintenance-tabdeal-logo.svg"
        alt="under-maintenance-tabdeal-logo"
      />
    </div>
    <div class="flex md:hidden flex-col justify-center items-center pt-8 gap-8">
      <h1 class="text-2xl font-bold">سایت در حال بروزرسانی فنی می‌باشد</h1>
      <p class="text-center">
        تا ساعت 2:30 برمی‌گردیم. از صبوری شما سپاسگذاریم.
      </p>
      <img
        src="/images/under-maintenance/under-maintenance-tabdeal-logo-mobile.svg"
        alt="under-maintenance-tabdeal-logo"
        width="35%"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "under-maintenance",
  layout: "maintenance",
};
</script>

<style scoped></style>
