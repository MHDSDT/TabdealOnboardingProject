<template>
  <div dir="rtl">
    <section class="bg-gray-200 p-10 flex flex-col gap-4 items-start">
      <h1 class="text-4xl font-medium text-black text-center">نمای بازارها</h1>
      <button class="btn btn-primary btn-outline gap-2 flex flex-nowrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path :d="mdiHelpCircleOutline"></path>
        </svg>

        راهنمای خرید و فروش

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path :d="mdiArrowLeft"></path>
        </svg>
      </button>
    </section>

    <section class="bg-white px-4 pt-4 pb-16 flex justify-center">
      <div class="card bg-white shadow-xl w-[900px]">
        <div class="card-body text-black">
          <MarketInformation :number-of-rows="100" :is-limited="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Title from "@/components/general/Title";
import { mdiHelpCircleOutline, mdiArrowLeft } from "@mdi/js";

export default {
  name: "markets-overview",
  data() {
    return {
      mdiHelpCircleOutline,
      mdiArrowLeft,
    };
  },
  components: {
    Title,
  },
};
</script>

<style scoped></style>
