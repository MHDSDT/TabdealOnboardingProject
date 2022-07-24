<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ref="icon"
    :class="classes"
  >
    <path :d="icon"></path>
  </svg>
</template>

<script>
let SIZE_MAP = {
  xSmall: "3",
  small: "4",
  dense: "5",
  default: "6",
  medium: "7",
  large: "9",
  xLarge: "10",
};

export default {
  name: "TIcon",
  data() {
    return {
      classesList: [],
    };
  },
  props: {
    size: {
      type: String,
      default: undefined,
    },
    xSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    xLarge: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "current",
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addSize() {
      if (this.size !== undefined) return `w-${this.size}`;
      const sizes = [
        this.xSmall,
        this.small,
        this.dense,
        this.medium,
        this.large,
        this.xLarge,
      ];
      let explicitSizeIndex = null;
      for (let size in sizes) {
        if (size) {
          explicitSizeIndex = size;
          break;
        }
      }
      let explicitSize =
        explicitSizeIndex === null
          ? SIZE_MAP.default
          : SIZE_MAP[explicitSizeIndex];
      this.classesList.push(`w-${explicitSize}`);
    },
    addColor() {
      this.classesList.push(`fill-${this.color}`);
    },
    addRight() {
      if (this.right) this.classesList.push("ml-2");
    },
    addLeft() {
      if (this.left) this.classesList.push("mr-2");
    },
    addDisabled() {
      if (this.disabled) this.$refs.icon.style.visibility = "hidden";
    },
  },
  computed: {
    icon() {
      return this.$slots.default[0].text;
    },
    classes() {
      this.addSize();
      this.addColor();
      this.addRight();
      this.addLeft();
      this.addDisabled();
      return this.classesList.join(" ");
    },
  },
};
</script>

<style scoped></style>
