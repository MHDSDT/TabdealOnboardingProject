<template>
  <div>
    <LightBanner
      title="کارمزدها"
      description="حداقل کارمزد را در پلتفرم تبدیل، بازاری امن و سریع برای خرید و فروش و تبادل ارزهای دیجیتال نظیر بیت کوین، اتریوم، تتر، پکس جی و ... تجربه کنید."
      background-image-path="/images/commission/commission-banner-background.svg"
    />
    <section
      class="flex flex-col py-12 px-8 sm:px-12 lg:px-28 items-center text-gray-600 gap-8 bg-gray-100"
    >
      <CommissionGeneralInfo />
      <CommissionIRTMarketsInfo />
    </section>
  </div>
</template>

<script>
import LightBanner from "@/components/general/LightBanner";
import CommissionGeneralInfo from "@/components/commissions/index/CommissionGeneralInfo";
import CommissionIRTMarketsInfo from "@/components/commissions/index/CommissionIRTMarketsInfo";

export default {
  name: "index",
  components: {
    LightBanner,
    CommissionGeneralInfo,
    CommissionIRTMarketsInfo,
  },
};
</script>

<style scoped></style>
