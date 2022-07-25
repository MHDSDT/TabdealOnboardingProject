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
  name: "error-layout",
  components: {
    TheHeader,
    CopyRight,
  },
};
</script>

<style scoped></style>
