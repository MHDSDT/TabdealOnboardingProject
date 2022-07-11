<template>
  <div>
    <Banner />
    <PageInfo />
    <ProsSection />
    <ApplicationPresentation />
  </div>
</template>

<script>
import Banner from '~/components/homepage/Banner';
import PageInfo from "@/components/homepage/PageInfo";
import ProsSection from "@/components/homepage/ProsSection";
import ApplicationPresentation from "@/components/homepage/ApplicationPresentation";

export default {
  name: 'HomePage',
  components: {
    Banner,
    PageInfo,
    ProsSection,
    ApplicationPresentation
  },
}
</script>
