<template>
  <div class="flex flex-col lg:w-4/5 gap-8 text-gray-600">
    <h1 class="font-bold text-2xl text-black mr-2">کارمزد برداشت تومانی</h1>
    <p class="mr-2">
      کارمزد پرداختی توسط درگاه پرداخت، به‌سبب هزینه‌های بانکی، مطابق جدول زیر
      دریافت می‌شود و تبدیل مستقیماً از کاربران، کارمزدی بابت برداشت تومانی
      دریافت نمی‌نماید.
    </p>
    <div class="flex flex-col gap-4 rounded-lg shadow-xl bg-white p-8">
      <div>
        <div
          class="flex bg-gray-200 rounded-lg font-bold text-xs text-gray-400 p-4"
        >
          <div
            v-for="(tableHeader, index) in tableHeaders"
            :class="colsPortion[index]"
          >
            {{ tableHeader }}
          </div>
        </div>
        <div>
          <div
            v-for="tableRow in tableRows"
            class="border-b p-4 flex text-xs sm:text-base"
          >
            <div :class="colsPortion[0]">{{ tableRow[0] }}</div>
            <div :class="colsPortion[1]">{{ tableRow[1] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TomanWithdrawCommissionInfo",
  data() {
    return {
      tableHeaders: ["میزان برداشت تومانی", "کارمزد برداشت"],
      colsPortion: ["w-2/3", "w-1/3"],
      tableRows: [
        ["کمتر از ۴۵۰ هزار تومان", "یک درصد از مبلغ برداشتی"],
        ["بین ۴۵۰ هزار تومان و ۵۰ میلیون تومان", "۴۵۰۰ تومان"],
        ["بیش از ۵۰ میلیون تومان", "۴۵۰۰ تومان به‌ازای هر ۵۰ میلیون تومان"],
      ],
    };
  },
};
</script>

<style scoped></style>

کم‌تر از 450 هزار تومان یک درصد از مبلغ برداشتی بین 450 هزار تومان و 50 میلیون
تومان تومان 4500 بیش از 50 میلیون تومان 4500 تومان به‌ازای هر 50 میلیون تومان
