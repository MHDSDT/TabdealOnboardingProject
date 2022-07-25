<template>
  <div class="flex flex-col gap-8 text-gray-600">
    <h1 class="font-bold text-2xl text-black mr-2">
      سطوح کارمزدی بازارهای تومانی
    </h1>
    <p class="mr-2">
      کارمزد خرید و فروش ارزهای دیجیتال در معاملاتی که یک سر آن‌ها تومان است، بر
      حسب حجم معاملات ۳۰ روز اخیر کاربر در بازارهای تومانی، به‌صورت پله‌ای
      محاسبه می‌شود و به شرح زیر است
    </p>
    <div class="flex flex-col gap-4 rounded-lg shadow-xl bg-white p-8">
      <div>
        <div
          class="flex bg-gray-200 rounded-lg font-bold text-xs text-gray-400 p-4"
        >
          <div
            v-for="(tableHeader, index) in tableHeaders"
            class="text-start"
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
            <div :class="colsPortion[2]">{{ tableRow[2] }}</div>
          </div>
        </div>
      </div>
      <p class="mx-8 mt-2">
        کارمزد معاملات ارزهای دیجیتال در بازارهایِ با پایهٔ تتر،‌ یعنی معاملاتی
        که در آن تومان دریافت یا پرداخت نمی‌شود، به‌صورت ثابت %0.2 است.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommissionIRTMarketsInfo",
  data() {
    return {
      tableHeaders: [
        "حجم معاملات در بازار‌های تومانی در ۳۰ روز اخیر",
        "کارمزد",
        "سطح کارمزدی",
      ],
      colsPortion: ["w-2/3", "w-1/6", "w-1/6"],
      tableRows: [
        ["کمتر از ۱۰ میلیون", "0.40%", "فیروزه"],
        ["بین ۱۰ تا ۴۰ میلیون", "0.35%", "عقیق"],
        ["بین ۴۰ تا ۱۰۰ میلیون", "0.30%", "کهربا"],
        ["بین ۱۰۰ تا ۲۰۰ میلیون", "0.25%", "کریستال"],
        ["بین ۲۰۰ میلیون تا ۱ میلیارد", "0.22%", "یاقوت"],
        ["بین ۱ تا ۵ میلیارد", "0.18%", "زمرد"],
        ["بالای ۵ میلیارد", "0.15%", "الماس"],
      ],
    };
  },
};
</script>

<style scoped></style>
