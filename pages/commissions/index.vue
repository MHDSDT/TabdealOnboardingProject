<template>
  <div>
    <LightBanner
      title="کارمزدها"
      description="حداقل کارمزد را در پلتفرم تبدیل، بازاری امن و سریع برای خرید و فروش و تبادل ارزهای دیجیتال نظیر بیت کوین، اتریوم، تتر، پکس جی و ... تجربه کنید."
      background-image-path="/images/commission/commission-banner-background.svg"
    />
    <section
      class="flex flex-col py-12 px-8 sm:px-12 lg:px-28 items-center text-gray-600 gap-12 bg-gray-100"
    >
      <CommissionGeneralInfo />
      <CommissionIRTMarketsInfo />
      <SwapCommissionInfo />

      <div class="lg:w-4/5 space-y-4 text-gray-600">
        <h1 class="font-bold text-2xl text-black">
          کارمزد برداشت و واریز ارز دیجیتال (کوین)
        </h1>
        <p class="text-justify">
          کارمزد برداشت یا واریز ارزهای دیجیتال، به نوع ارز موردنظر و شبکهٔ
          بلاک‌چین بستگی دارد. این کارمزد مربوط به تراکنش‌های درون‌شبکه‌ای است و
          تبدیل در تعیین آن‌ها نقشی ندارد. این کارمزدها را به تفکیک هر کوین
          می‌توانید در لینک زیر مشاهده نمایید.
        </p>
        <NuxtLink
          to="/commissions/cryptofee"
          class="btn btn-ghost btn-sm border border-gray-500 rounded font-medium text-xs text-gray-400"
        >
          جزئیات کارمزد برداشت ارز دیجیتال
          <!--          <TIcon right>{{ mdiChevronLeft }}</TIcon>-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            class="fill-gray-400 mr-1 stroke-0"
          >
            <path :d="mdiChevronLeft"></path>
          </svg>
        </NuxtLink>
      </div>

      <div class="lg:w-4/5 space-y-4 text-gray-600">
        <h1 class="font-bold text-2xl text-black">کارمزد واریز تومانی</h1>
        <p class="text-justify">
          تبدیل بابت واریز تومانی، از کاربران کارمزدی دریافت نمی‌کند. صرفاً
          امکان دارد کارمزد واریز توسط پرداخت‌یار دریافت شود.
        </p>
      </div>

      <TomanWithdrawCommissionInfo />

      <!-- TODO: TradeNowSection -->
    </section>
  </div>
</template>

<script>
import { mdiChevronLeft } from "@mdi/js";
import LightBanner from "@/components/general/LightBanner";
import CommissionGeneralInfo from "@/components/commissions/index/CommissionGeneralInfo";
import CommissionIRTMarketsInfo from "@/components/commissions/index/CommissionIRTMarketsInfo";
import SwapCommissionInfo from "@/components/commissions/index/SwapCommissionInfo";
import TomanWithdrawCommissionInfo from "@/components/commissions/index/TomanWithdrawCommissionInfo";

export default {
  name: "index",
  data() {
    return {
      mdiChevronLeft,
    };
  },
  components: {
    LightBanner,
    CommissionGeneralInfo,
    CommissionIRTMarketsInfo,
    SwapCommissionInfo,
    TomanWithdrawCommissionInfo,
  },
};
</script>

<style scoped></style>
