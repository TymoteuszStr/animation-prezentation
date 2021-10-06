22
<template>
  <SlajdWrapper>
    <div class="inputWrapper">
      <p class="plus">+</p>
      <p class="text">Dodaj gracza</p>
    </div>
    <div class="modal">
      <input type="string" />
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted, ref } from "vue";
import SlajdWrapper from "@/components/Slajdy/SlajdWrapper.vue";

export default {
  name: "Tablica",
  components: {
    SlajdWrapper,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/style.scss";

.inputWrapper {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: $main-color;
  font-weight: bold;
  border: 5px solid $main-color;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  .plus {
    border: 4px solid $main-color;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
}
</style>
