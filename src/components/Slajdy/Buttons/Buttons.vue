<template>
  <SlajdWrapper>
    <div class="button-container">
      <a  class="button-link"  @click="showCode = !showCode">
        <div class="circle">
        </div>
        <span class="text">CLICK ME</span>
        <img src="@/assets/arrow.svg" alt="ddd" class="button-icon">
      </a>
      <a  class="button-link" @click="showCode = !showCode">
        <div class="circle circle-right">
        </div>
        <img src="@/assets/arrow.svg" alt="ddd" class="button-icon icon-left">
        <span class="text text-right">CLICK ME</span>
      </a>
    </div>
    <code v-if="showCode" class="code">
      <pre>
        .circle {
            position: absolute;
            display: inline-block;
            ...
            height: 4rem;
            width: 4rem;
            transition: width 1s ease;
        }
        .button-link:hover > .circle {
          width: 15rem;
        }
        .button-link:hover > .button-icon {
          opacity: 1;
        }
        .button-icon {
          display: inline-block;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
      </pre>
    </code>
 
  </SlajdWrapper>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "Buttons",
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

  .code {
    white-space: pre-wrap;
  }
  .showCodeBtn {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
    &:hover {
    cursor: pointer;
    }
  }

.button-link {
  font-size: 2rem;
  color: black;
}

.button-container {
  width: 60%;
  height: 60%;
  margin: 10% 20%;
  display: flex;
  justify-content: space-around;
}

img {
  height: 3.2rem;
  width: 3.2rem;
}

.circle {
    position: absolute;
    display: inline-block;
    border-radius: 50px;
    background-color: coral;
    height: 4rem;
    width: 4rem;
    transition: width 1s ease;
}


.button-link{
    position: relative;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.button-link:hover > .circle {
    width: 15rem;
}

.text{
    z-index: 1;
    padding-left: 20px;
    font-weight:700;
    letter-spacing: 1px;
}
.button-icon {
    display: inline-block;
    opacity: 0;
    transition: opacity 0.5s ease;
    transition-delay: 1s;
    margin-left: 0.2rem;
}
.button-link:hover > .button-icon {
    opacity: 1;
}
.circle-right {
  right: -1rem;
}

.text-right {
  padding-left: 0rem;
}

</style>
