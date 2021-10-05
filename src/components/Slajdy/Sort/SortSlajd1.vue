<template>
  <SlajdWrapper>
    <div class="sortWrapper">
      <ul class="list">
        <transition-group>
          <li
            class="nr"
            v-for="(nr, index) in numbers"
            :key="nr"
            :style="`top:${index * 35 + 20}px`"
          >
            {{ nr }}
          </li>
        </transition-group>
      </ul>
    </div>
    <div class="btnWrapper">
      <button class="btn" @click="sortNumbers()">sort</button>
      <button class="btn" @click="shuffleNumbers()">shuffle</button>
    </div>
  </SlajdWrapper>
</template>

<script>
import { ref } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "SortWrapper",
  components: {
    SlajdWrapper,
  },
  setup() {
    let numbers = ref([-5, -1, 0, 1, 2.3, 3, 50, 666, 7, 5.5, 9, 999, 11, 420, 123]);
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
  width: 200px;
  height: 600px;
  left: 50%;
  transform: translate(-50%);
  li {
    position: absolute;
    width: 100px;
    height: 40px;
    text-align: center;
    transition: all 0.9s ease-out;
    left: 35px;
    list-style: none;
    font-weight: 600;
    font-size: 36px;
    color: #e3e3e4;
  }
}
.btnWrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  width: 200px;
  height: 100px;
  background-color: #b67929;
  color: white;
  font-size: 24px;
  letter-spacing: 1px;
  border-radius: 50px;
  margin: 10px 10px;
  box-shadow: 0px 0px 13px 0px rgba(0, 36, 63, 1);
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
}
</style>
