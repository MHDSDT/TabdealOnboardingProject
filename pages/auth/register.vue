<template>
  <div class="h-screen">
    <Register />
  </div>
</template>

<script>
import Register from "@/components/auth/Register";

export default {
  name: "register",
  components: {
    Register,
  },
  layout: "auth",
};
</script>

<style scoped></style>
