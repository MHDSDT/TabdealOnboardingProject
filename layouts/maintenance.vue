<template>
  <div dir="rtl">
    <Nuxt />
    <CopyRight :is-dark="false" :condition="false" />
  </div>
</template>

<script>
import CopyRight from "@/components/default/CopyRight";

export default {
  name: "maintenance",
  components: {
    CopyRight,
  },
};
</script>

<style scoped></style>
