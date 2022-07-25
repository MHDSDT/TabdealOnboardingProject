<template>
  <div dir="rtl">
    <TheHeader />
    <Nuxt />
    <CopyRight />
  </div>
</template>

<script>
import TheHeader from "@/components/default/TheHeader";
import CopyRight from "@/components/default/CopyRight";

export default {
  name: "404",
  components: {
    TheHeader,
    CopyRight,
  },
};
</script>

<style scoped></style>
