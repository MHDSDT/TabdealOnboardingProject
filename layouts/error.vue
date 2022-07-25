<template>
  <div v-if="error.statusCode === 404">
    <NotFoundErrorPage />
  </div>
  <div v-else>
    <div class="w-full flex items-center justify-center py-10">
      <div>
        {{ error.message }}
      </div>
    </div>
  </div>
</template>

<script>
import NotFoundErrorPage from "~/pages/404";

export default {
  components: { NotFoundErrorPage },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  head() {
    const title = this.error.statusCode === 404 ? "تبدیل | ۴۰۴" : "تبدیل";
    return {
      title,
    };
  },
};
</script>

<style scoped></style>
