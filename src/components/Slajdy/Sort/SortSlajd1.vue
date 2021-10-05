<template>
  <SlajdWrapper>
    <div class="sortWrapper">
      <ul class="list">
        <li
          class="nr"
          v-for="(nr, index) in numbers"
          :key="index"
          :style="`top:${nr * 25}px`"
        >
          {{ nr }}
        </li>
      </ul>
    </div>
    <div class="btnWrapper">
      <button class="btn" @click="sortNumbers()">SORT</button>
      <button class="btn" @click="shuffleNumbers()">shuffle</button>
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted, ref } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "SortWrapper",
  components: {
    SlajdWrapper,
  },
  setup() {
    let numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const sortNumbers = () => {
      numbers.value.sort((a, b) => a - b);
    };
    const shuffleNumbers = () => {
      numbers.value.sort(() => (Math.random() > 0.5 ? 1 : -1));
    };
    return { numbers, sortNumbers, shuffleNumbers };
  },
};
</script>

<style lang="scss">
.list {
  position: relative;
  left: 50px;
  li {
    width: 100px;
    line-height: 2em;
    text-align: center;
    transition: all 0.9s ease-out;
    position: absolute;
    left: 50px;
    list-style: none;
    font-weight: 600;
    font-size: 24px;
  }
}
.btnWrapper {
  position: absolute;
  right: 50px;
}
.btn {
  right: 50px;
}
</style>
