<template>
  <div class="h-screen">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "~/components/auth/RegisterForm";

export default {
  name: "register",
  components: {
    RegisterForm,
  },
  layout: "auth",
};
</script>

<style scoped></style>
