<template>
  <h1 :class="classes">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      classes: ''
    }
  },
  props: {
    textAlign: {
      type: String,
      default: 'center'
    },
    fontSize: {
      type: String,
      default: 'base'
    },
    fontWeight: {
      type: String,
      default: 'bold'
    },
    isDark: {
      type: Boolean,
      required: true
    },
    isImportant: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addTextColor: function () {
      if (this.isImportant) this.classes += 'text-yellow-500 ';
      else this.classes += this.isDark ? 'text-white ' : 'text-black ';
    },
    addFontWeight: function() {
      this.classes += `font-${this.fontWeight} `;
    },
    addFontSize: function() {
      this.classes += `text-${this.fontSize} `;
    },
    addTextAlign: function () {
      this.classes += `text-${this.textAlign} `;
    }
  },
  computed: {
    setClasses: function () {
      this.classes = '';
      this.addFontSize();
      this.addFontWeight();
      this.addTextColor();
      this.addTextAlign();
      return this.classes;
    }
  }
}
</script>

<style scoped>

</style>
