<template>
  <SlajdWrapper>
    <div class="button-container">
      <a href="#" class="button-link">
        <div class="circle">
        </div>
        <span class="text">CLICK ME</span>
        <img src="@/assets/arrow.svg" alt="ddd" class="button-icon">
      </a>
      <a href="#" class="button-link">
        <div class="circle">
        </div>
        <span class="text">CLICK ME</span>
        <img src="@/assets/arrow.svg" alt="ddd" class="button-icon">
      </a>
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "Buttons",
  components: {
    SlajdWrapper,
  },
  setup() {
    
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  width: 60%;
  height: 60%;
  margin: 10% 20%;
  display: flex;
  justify-content: space-between;
}
.circle {
    position: absolute;
    display: inline-block;
    height: 50px;
    border-radius: 50px;
    background-color: coral;
    width: 50px;
    transition: width 1s ease;
}

.button-link{
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.button-link:hover > .circle {
    width: 140px;
}

.text{
    z-index: 1;
    padding-left: 20px;
    font-weight:700;
    letter-spacing: 1px;
}
.button-icon {
  
    display: inline-block;
    vertical-align: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    transition-delay: 1s;
}
.button-link:hover > .button-icon {
    opacity: 1;
}
</style>
