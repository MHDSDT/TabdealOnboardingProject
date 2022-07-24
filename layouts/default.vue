<template>
  <div dir="rtl">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/default/TheHeader";
import TheFooter from "@/components/default/TheFooter";

export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped></style>
