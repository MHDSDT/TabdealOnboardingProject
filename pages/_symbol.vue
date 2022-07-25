<template>
  <div>
    <section class="bg-gray-200 p-10 flex flex-col gap-4 items-center">
      <div
        class="w-full xl:w-[1200px] flex flex-col md:flex-row justify-between"
      >
        <div class="space-y-6">
          <div class="flex gap-2 text-black font-light">
            <NuxtLink class="text-gray-500" to="/">تبدیل</NuxtLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path :d="mdiChevronLeft"></path>
            </svg>
            <p>{{ `خرید و فروش ${this.obj.farsi_symbol}` }}</p>
          </div>
          <h1 class="text-4xl font-medium text-black">
            {{ `خرید و فروش ${this.obj.farsi_symbol}` }}
          </h1>
          <button class="btn btn-primary btn-lg gap-2 w-auto flex-nowrap">
            {{ `خرید و فروش ${this.obj.farsi_symbol}` }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path :d="mdiChevronLeft"></path>
            </svg>
          </button>
        </div>

        <div
          class="space-y-2 text-black p-6 flex flex-col justify-center"
          dir="ltr"
        >
          <p class="text-4xl font-light">{{ this.obj.symbol_name }}</p>
          <div class="flex gap-6 items-center">
            <h1 class="text-5xl font-medium">
              {{
                currency(
                  this.obj.current_price,
                  this.obj.second_currency_symbol,
                  "USD"
                )
              }}
            </h1>
            <p
              class="text-white rounded-md text-xl p-2"
              :class="calculateColorOfChangesBg(this.obj.changes)"
            >
              {{ this.obj.changes | percent }}
            </p>
          </div>
          <p class="text-gray-600 text-xl flex justify-end" dir="rtl">
            {{
              currency(
                this.obj.current_price,
                this.obj.second_currency_symbol,
                "Toman"
              )
            }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white px-4 pt-4 pb-16 flex justify-center">
      <div class="card bg-white shadow-xl w-full lg:w-[900px]">
        <div class="card-body text-black">
          <div>
            <h1 class="text-2xl font-medium mb-4">آمار فعلی ارز</h1>

            <div class="overflow-x-auto">
              <table class="table w-full">
                <tr class="hover:bg-gray-200 border-b">
                  <td>نام ارز</td>
                  <td class="text-end">{{ this.obj.farsi_symbol }}</td>
                </tr>
                <tr class="hover:bg-gray-200 border-b">
                  <td>نماد</td>
                  <td class="text-end">{{ this.obj.symbol }}</td>
                </tr>
                <tr class="hover:bg-gray-200 border-b">
                  <td>قیمت جهانی</td>
                  <td class="text-end">
                    {{
                      currency(
                        this.obj.current_price,
                        this.obj.second_currency_symbol,
                        "USD"
                      )
                    }}
                  </td>
                </tr>
                <tr class="hover:bg-gray-200 border-b">
                  <td>قیمت بازار داخلی</td>
                  <td class="text-end">
                    {{
                      currency(
                        this.obj.current_price,
                        this.obj.second_currency_symbol,
                        "Toman"
                      )
                    }}
                  </td>
                </tr>
                <tr class="hover:bg-gray-200">
                  <td>تغییرات ۲۴ ساعت گذشته</td>
                  <td
                    class="text-start"
                    :class="calculateColorOfChangesText(this.obj.changes)"
                    dir="ltr"
                  >
                    {{ this.obj.changes | percent }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mdiChevronLeft } from "@mdi/js";

export default {
  name: "_symbol",
  data() {
    return {
      mdiChevronLeft,
      cryptoProperties: [],
    };
  },
  async asyncData({ params, $axios }) {
    let crypto = null;
    const config = {
      method: "get",
      url: "https://api.tabdeal.org:8443/r/plots/price_info/",
    };
    await $axios(config)
      .then((res) => {
        crypto = res.data;
      })
      .catch((err) => {
        console.error(err);
      });

    return {
      obj: crypto[params.symbol.slice(4).toUpperCase()],
    };
  },
  middleware({ params, error }) {
    // if (!store.state.isLoggedIn) return redirect({ path: "/auth/login-req" });
    const symbols = require("~/coins.json");
    if (
      !symbols.includes(params.symbol.toLowerCase()) ||
      params.symbol.toLowerCase() === "lunc"
    ) {
      // next({ path: '/404' })
      // redirect({ path: '/404' })
      error({ statusCode: 404, message: "coin not found" });
    }
  },
  methods: {
    calculateColorOfChangesText(value) {
      if (value > 0) return "text-green-500";
      if (value === 0) return "text-gray-700";
      return "text-red-600";
    },
    calculateColorOfChangesBg(value) {
      if (value > 0) return "bg-green-500";
      if (value === 0) return "bg-gray-700";
      return "bg-red-600";
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
  filters: {
    percent(value) {
      value = Number(value);
      if (isNaN(value)) throw "Please pass a number!";
      return value.toFixed(2) + "%";
    },
  },
};
</script>

<style scoped></style>
