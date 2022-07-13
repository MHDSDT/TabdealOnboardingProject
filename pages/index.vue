<template>
  <div>
    <Banner />
    <HomePageMarketInformation />
    <PageInfo />
    <ProsSection />
    <ApplicationPresentation />
    <HomepageUsefulLinks />
  </div>
</template>

<script>
import Banner from "~/components/homepage/Banner";
import HomePageMarketInformation from "@/components/homepage/HomePageMarketInformation";
import PageInfo from "@/components/homepage/PageInfo";
import ProsSection from "@/components/homepage/ProsSection";
import ApplicationPresentation from "@/components/homepage/ApplicationPresentation";
import HomepageUsefulLinks from "@/components/homepage/HomepageUsefulLinks";

export default {
  name: "HomePage",
  components: {
    Banner,
    HomePageMarketInformation,
    PageInfo,
    ProsSection,
    ApplicationPresentation,
    HomepageUsefulLinks,
  },
};
</script>
