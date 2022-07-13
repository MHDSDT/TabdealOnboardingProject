<template>
  <div>
    <form class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-gray-400"
      >
        <path :d="mdiMagnify"></path>
      </svg>
      <div class="relative w-auto">
        <input
          type="text"
          class="text-gray-900 text-sm w-full pl-10 p-2.5 focus:border-none"
          placeholder="جستجوی نماد یا رمزارز"
          required
        />
      </div>
    </form>

    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-start">
        <thead class="text-xs text-gray-700">
          <tr>
            <th
              v-for="header in headers"
              scope="col"
              class="text-start py-3 px-6"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b"
            v-for="crypto in calculatedCryptos"
            :key="crypto.symbol_name"
          >
            <td class="py-2 px-4 font-medium text-gray-900 whitespace-nowrap">
              <p>{{ `${crypto.symbol} / ${crypto.second_currency_symbol}` }}</p>
              {{ crypto.farsi_symbol }}
            </td>
            <td class="py-2 px-4">
              {{
                crypto.current_price | currency(crypto.second_currency_symbol)
              }}
            </td>
            <td
              class="py-2 px-4"
              :class="calculateColorOfChanges(crypto.changes)"
            >
              {{ crypto.changes | percent }}
            </td>
            <td class="py-2 px-4 w-[110px]">
              <button class="btn btn-primary btn-sm">صفحه ارز</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
  name: "MarketInformation",
  data() {
    return {
      cryptos: {},
      mdiMagnify,
      headers: ["نام", "آخرین قیمت", "تغییرات قیمت", ""],
    };
  },
  async fetch() {
    const url = "https://api.tabdeal.org:8443/r/plots/price_info/";
    let res = await this.$axios.get(url);
    this.cryptos = res.data;
  },
  props: {
    numberOfRows: {
      type: Number,
      required: true,
    },
  },
  methods: {
    calculateColorOfChanges: function (value) {
      if (value > 0) return "text-green-500";
      if (value === 0) return "text-gray-700";
      return "text-red-600";
    },
  },
  computed: {
    calculatedCryptos: function () {
      let numberOfCryptosToBeShown = Math.max(this.numberOfRows, 0);
      return Object.keys(this.cryptos)
        .slice(0, numberOfCryptosToBeShown)
        .reduce((result, key) => {
          result[key] = this.cryptos[key];
          return result;
        }, {});
    },
  },
  filters: {
    currency: function (value, curr) {
      let locales = curr === "USDT" ? "en-US" : "fa-IR";
      let options = {
        style: "currency",
        currency: curr === "USDT" ? "USD" : "IRR",
        minimumFractionDigits: 0,
      };
      const formatter = new Intl.NumberFormat(locales, options);
      return formatter.format(value);
    },
    percent: function (value) {
      value = Number(value);
      if (isNaN(value)) throw "Please pass a number!";
      return value.toFixed(2) + "%";
    },
  },
};
</script>

<style scoped></style>
