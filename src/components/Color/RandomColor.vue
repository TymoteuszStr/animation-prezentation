22
<template>
  <SlajdWrapper>
    <div class="randomColorWrapper">
      <div class="leftSide">
        <div
          class="colorContainer"
          :style="`background-color:rgb(${r},${g},${b});`"
        ></div>
        <button class="colorBtn" @click="randColor()">LOSUJ KOLOR</button>
      </div>
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
    const randNr = () => Math.floor(Math.random() * 256);
    let r = ref(randNr());
    let g = ref(randNr());
    let b = ref(randNr());

    const randColor = () => {
      r.value = randNr();
      g.value = randNr();
      b.value = randNr();
    };
    return { r, g, b, randColor };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/style.scss";

.leftSide {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .colorContainer {
    border: 2px solid white;
    width: 80%;
    height: 400px;
  }
  .colorBtn {
    width: 30%;
    border-radius: 50px;
    height: 80px;
    background-color: $main-color;
    color: white;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    padding: 20px;
    margin-top: 50px;
  }
}
</style>
