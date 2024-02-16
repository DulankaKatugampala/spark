<template>
  <svg class="icon">
    <use :xlink:href="URL"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    URL() {
      return `./icons.svg#${this.icon}`;
    },
  },
};
</script>
