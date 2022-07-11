<template>
  <div>
    <Banner />
    <PageInfo />
    <ProsSection />
  </div>
</template>

<script>
import Banner from '~/components/homepage/Banner';
import PageInfo from "@/components/homepage/PageInfo";
import ProsSection from "@/components/homepage/ProsSection";

export default {
  name: 'HomePage',
  components: {
    Banner,
    PageInfo,
    ProsSection
  },
}
</script>
