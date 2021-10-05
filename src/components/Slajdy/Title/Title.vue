<template>
  <SlajdWrapper>
    <div class="container">
      <h5>Proste i szybkie animacje</h5>
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "Title",
  components: {
    SlajdWrapper,
  },
  setup() {
    
  },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  h5 {
    font-size: 36px;
    margin: auto;
  }
</style>
