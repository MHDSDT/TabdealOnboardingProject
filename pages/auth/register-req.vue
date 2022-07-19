<template>
  <div class="h-screen">
    <RegisterRequestForm />
  </div>
</template>

<script>
import RegisterRequestForm from "~/components/auth/RegisterRequestForm";

export default {
  name: "register-req",
  components: {
    RegisterRequestForm,
  },
  layout: "auth",
};
</script>

<style scoped></style>
