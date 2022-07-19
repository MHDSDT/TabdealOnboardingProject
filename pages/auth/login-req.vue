<template>
  <div class="h-screen">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "~/components/auth/LoginForm";

export default {
  name: "login-req",
  components: {
    LoginForm,
  },
  layout: "auth",
};
</script>

<style scoped></style>
