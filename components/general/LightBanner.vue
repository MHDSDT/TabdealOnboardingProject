<template>
  <section
    class="flex py-12 px-8 sm:px-12 lg:px-28 justify-center text-gray-600 bg-gray-200"
  >
    <!--    <div class="flex">-->
    <div class="flex flex-col lg:w-4/5 gap-4 z-10">
      <img
        src="/images/commission/dots.png"
        alt="dots"
        width="72"
        height="16"
      />
      <h1 class="font-bold text-4xl text-black">{{ title }}</h1>
      <p class="text-justify">
        {{ description }}
      </p>
    </div>
    <!--      <img class="-mb-28 -mr-96 w-200 z-0" :src="backgroundImagePath" />-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: "LightBanner",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    backgroundImagePath: {
      type: String,
      // required: true,
    },
  },
};
</script>

<style scoped></style>
