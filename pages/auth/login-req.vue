<template>
  <div class="h-screen">
    <Login />
  </div>
</template>

<script>
import Login from "@/components/auth/Login";

export default {
  name: "login-req",
  components: {
    Login,
  },
  layout: "auth",
};
</script>

<style scoped></style>
