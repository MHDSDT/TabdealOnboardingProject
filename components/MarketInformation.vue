<template>
  <div dir="rtl">
    <form class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-gray-400">
        <path :d="mdiMagnify"></path>
      </svg>
      <div class="relative w-auto" dir="rtl">
        <input type="text" class="text-gray-900 text-sm w-full pl-10 p-2.5 focus:border-none"
               placeholder="جستجوی نماد یا رمزارز" required>
      </div>

    </form>

    <div>
      <table class="table-auto">
        <tr>
          <th class="font-normal">نام</th>
          <th class="w-full font-normal">آخرین قیمت</th>
          <th class="w-full font-normal">تغییرات قیمت</th>
        </tr>
        <tbody v-for="crypto in cryptos" :key="crypto.symbol_name">
        <tr>
          <td class="">
            <p>{{ `${crypto.symbol} / ${crypto.second_currency_symbol}` }}</p>
            {{ crypto.farsi_symbol }}
          </td>
          <td class="w-full">
            {{ crypto.current_price | currency(crypto.second_currency_symbol) }}
            <p class=""></p>
          </td>
          <td class="w-full">

          </td>
          <td class="w-full">

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mdiMagnify} from '@mdi/js'

const url = 'https://api.tabdeal.org:8443/r/plots/price_info/';

export default {
  name: "MarketInformation",
  data() {
    return {
      cryptos: {},
      mdiMagnify
    }
  },
  async fetch() {
    console.log(this);
    let res = await this.$axios.get(url);
    this.cryptos = res.data;
  },
  filters: {
    currency: function(value, curr) {
      var formatter = new Intl.NumberFormat(curr === 'USDT' ? 'en-US' : 'fa-IR', {
        style: 'currency',
        currency: curr === 'USDT' ? 'USD' : 'IRR',
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  }
};

</script>

<style scoped>

</style>
