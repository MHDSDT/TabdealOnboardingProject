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
              class="text-start py-3 px-4 text-gray-400"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-t"
            v-for="crypto in calculatedCryptos"
            :key="crypto.symbol_name"
          >
            <td class="py-2 px-4 text-gray-400">
              <div class="flex">
                <img
                  class="w-12 h-12 ml-3"
                  :alt="crypto.symbol + 'icon'"
                  :src="
                    'https://tabdeal.org/coin-icons/' +
                    crypto.symbol.split('_')[0] +
                    '-icon.svg'
                  "
                />
                <div class="flex flex-col">
                  <div class="font-medium text-base flex justify-end" dir="ltr">
                    <span class="text-black">
                      {{ `${crypto.symbol}` }}&nbsp;
                    </span>
                    <span class="text-base">
                      {{ `/ ${crypto.second_currency_symbol}` }}
                    </span>
                  </div>
                  {{ crypto.farsi_symbol }}
                </div>
              </div>
            </td>
            <td class="py-2 px-4">
              <div class="flex flex-col items-start">
                <h1 class="font-medium text-base">
                  {{
                    currency(
                      crypto.current_price,
                      crypto.second_currency_symbol,
                      "USD"
                    )
                  }}
                </h1>
                <p class="text-gray-400 flex justify-end" dir="rtl">
                  {{
                    currency(
                      crypto.current_price,
                      crypto.second_currency_symbol,
                      "Toman"
                    )
                  }}
                </p>
              </div>
            </td>
            <td
              dir="ltr"
              class="py-2 px-4 text-end"
              :class="calculateColorOfChanges(crypto.changes)"
            >
              {{ crypto.changes | percent }}
            </td>
            <td class="py-2 px-4 w-[110px]">
              <NuxtLink
                :to="`buy-${crypto.symbol.toLowerCase()}`"
                class="btn btn-primary btn-sm"
                >صفحه ارز
              </NuxtLink>
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
      headers: ["نام", "آخرین قیمت", "تغییرات قیمت", ""],
      mdiMagnify,
    };
  },
  async fetch() {
    const config = {
      method: "get",
      url: "https://api.tabdeal.org:8443/r/plots/price_info/",
    };
    await this.$axios(config)
      .then((response) => {
        this.cryptos = response.data;
      })
      .catch((error) => {
        console.error(error.data);
      });
  },
  props: {
    isLimited: {
      type: Boolean,
      required: true,
    },
    numberOfRows: {
      type: Number,
      default: Number.MAX_VALUE,
    },
  },
  methods: {
    calculateColorOfChanges: function (value) {
      if (value > 0) return "text-green-500";
      if (value === 0) return "text-gray-700";
      return "text-red-600";
    },
    currency(value, curr, showCurr) {
      const usdFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      });

      const tomanFormatter = new Intl.NumberFormat("fa-IR", {
        style: "currency",
        currency: "IRR",
        minimumFractionDigits: 0,
      });

      if (curr === "USDT") {
        const usdOutput = usdFormatter.format(value);
        const tomanOutput = `${tomanFormatter
          .format(value * 30000)
          .slice(6)} تومان`;
        return showCurr === "USD" ? usdOutput : tomanOutput;
      } else {
        const usdOutput = usdFormatter.format(value / 30000);
        const tomanOutput = `${tomanFormatter.format(value).slice(6)} تومان`;
        return showCurr === "USD" ? usdOutput : tomanOutput;
      }
    },
  },
  computed: {
    calculatedCryptos: function () {
      if (!this.isLimited) return this.cryptos;
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
    percent: function (value) {
      value = Number(value);
      if (isNaN(value)) throw "Please pass a number!";
      return value.toFixed(2) + "%";
    },
  },
};
</script>

<style scoped></style>
