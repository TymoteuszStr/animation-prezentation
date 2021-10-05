<template>
  <div class="circle" :style="`width:${size}px; height:${size}px`"></div>
</template>

<script>
export default {
  name: "Circle",
  props: {
    size: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";
.circle {
  background-color: white;
  background: linear-gradient($main-color, #c5914c);
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  overflow: hidden;
}

@media (max-width: 959px) {
  .circle {
    max-width: 200px;
    max-height: 200px;
  }
}
</style>
