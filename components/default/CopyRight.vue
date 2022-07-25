<template>
  <footer
    class="footer footer-center p-4 text-base-content"
    :class="calculatedClass"
  >
    <div class="flex flex-row" :class="calculatedClass">
      <p>© تمام حقوق مادی و معنوی این سایت متعلق به تبدیل است.</p>
      <div
        v-if="condition"
        class="divider divider-horizontal -mx-1 bg-opacity-100"
      ></div>
      <NuxtLink v-if="condition" to="/termsconditions">
        قوانین و مقررات
      </NuxtLink>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CopyRight",
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
    condition: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    calculatedClass() {
      const lightClass = "text-gray-400 bg-white";
      const darkClass = "text-gray-400 bg-black";
      return this.isDark ? darkClass : lightClass;
    },
  },
};
</script>

<style scoped></style>
