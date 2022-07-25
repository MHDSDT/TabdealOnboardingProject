<template>
  <div class="flex flex-col gap-8 text-gray-600">
    <h1 class="font-bold text-2xl text-black mr-2">کارمزد خرید آسان</h1>
    <p class="mr-2">
      خرید آسان مناسب افرادی می‌باشد که می‌خواهند ارز دیجیتال در حجم بالا
      خریداری نمایند و یا علاقمند به سهولت در معامله هستند. بهای تمام شده خرید
      آسان به دلیل تنوع تامین کننده‌ ممکن است با قیمت خرید و فروش در بازار
      معاملاتی متفاوت باشد.
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
  name: "SwapCommissionInfo",
  data() {
    return {
      tableHeaders: ["نوع معامله", "کارمزد"],
      colsPortion: ["w-5/6", "w-1/6 text-left"],
      tableRows: [
        ["تبادل ارز ‌دیجیتال با تومان", "0.25%"],
        ["تبادل ارز ‌دیجیتال با تتر (USDT)", "0.2%"],
        ["تبادل ارز ‌دیجیتال با ارز‌ دیجیتال (به جز تتر USDT)", "0.15%"],
        ["تبادل تومان با دای (DAI)", "0.25%"],
        ["تبادل تتر با دای (DAI)", "0.2%"],
      ],
    };
  },
};
</script>

<style scoped></style>
