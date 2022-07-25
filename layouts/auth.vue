<template>
  <div dir="rtl" class="min-h-screen">
    <TheHeader />
    <Nuxt />
    <CopyRight :is-dark="false" />
  </div>
</template>

<script>
import TheHeader from "@/components/default/TheHeader";
import CopyRight from "@/components/default/CopyRight";

export default {
  name: "auth",
  components: {
    TheHeader,
    CopyRight,
  },
};
</script>

<style scoped></style>
