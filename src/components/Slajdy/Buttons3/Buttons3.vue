<template>
  <SlajdWrapper>
    <div class="button-container">
      <a @click="showCode = !showCode" class="button-link">
        <div class="button-text">
          SCREEN
        </div>
      </a>
      <a @click="showCode = !showCode" class="button-link effect2">
        <div class="button-text">
          DIFFER
        </div>
      </a>
    <a @click="showCode = !showCode" class="button-link effect3">
      <div class="button-text">
        DODGE
      </div>
    </a>
  </div>
   <code v-if="showCode" class="code">
      <pre>
      .button-link {
        color: #112b49;
        mix-blend-mode: screen;

        &:before{
          position: absolute; left: 0;
          content:"";
          border-radius: 100px;
          height: 4rem;
          width: 4rem;
          transition: width 1s ease-in;
          background-color: $primary;
          mix-blend-mode: screen;
        }
        &:hover:before {
          width: 14rem;
        }
      }
      .effect2, .effect2:before{
          mix-blend-mode: difference;
      }
      .effect3, .effect3:before{
          mix-blend-mode: color-dodge;
      }
      </pre>
  </code>
  </SlajdWrapper>
</template>

<script>
import { onMounted, ref } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "Buttons3",
  components: {
    SlajdWrapper,
  },
  setup() {
    let showCode = ref(false);
    return { showCode };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.button-link {
  font-size: 3rem;
  color: $font-color;
  text-decoration: none;
}
.button-text {
  margin: auto;
  padding-left: 2rem;
  padding-top: .5rem;
}
.button-link {
  height: 4rem;
  font-weight:600;
  position: relative;
  letter-spacing: 2px;
  color: #112b49;
  text-decoration: none;
   
  // background-color: $thirdary;
  mix-blend-mode: screen;
  &:before{
    position: absolute;
    left: 0;
    content:"";
    border-radius: 100px;
    height: 5.4rem;
    width: 5.4rem;
    transition: width 1s ease-in;
    background-color: $primary;
    mix-blend-mode: screen;
  
  }
  &:hover:before {
    width: 16rem;
  }
}
.button-container {
  isolation: isolate;
  width: 60%;
  height: 60%;
  margin: 10% 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.effect2, .effect2:before{
    mix-blend-mode: difference;
}
.effect3, .effect3:before{
    mix-blend-mode: color-dodge;
}

</style>
