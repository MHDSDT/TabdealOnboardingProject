<template>
  <div class="h-screen">
    <RegisterRequest />
  </div>
</template>

<script>
import RegisterRequest from "@/components/auth/RegisterRequest";

export default {
  name: "register-req",
  components: {
    RegisterRequest,
  },
  layout: "auth",
};
</script>

<style scoped></style>
