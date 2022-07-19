<template>
  <div class="h-screen">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "~/components/auth/RegisterForm";

export default {
  name: "register",
  middleware({ redirect, store }) {
    if (store.state.tmpPhoneNumber.length <= 9)
      return redirect({ path: "/auth/register-req" });
  },
  components: {
    RegisterForm,
  },
  layout: "auth",
};
</script>

<style scoped></style>
