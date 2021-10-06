<template>
  <SlajdWrapper>
    <div class="container">
      <h5 class="typing-animation">Prosty przepis na animację</h5>
      <h4 class="typing-animation">I niewiele więcej...</h4>
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

  @mixin typinganimation($steps) {
    // margin: auto;
    width: #{$steps}ch;    
    animation: typing 2s steps(#{$steps}), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin: 30vh 0;
  }

  h5 {
    font-size: 36px;
    margin-bottom: 2rem;
    // margin: auto;

    @include typinganimation(27);
  }
  h4 {
    font-size: 26px;
    // margin: auto;
    width: 0;
    @include typinganimation(20);
    animation-delay: 2s;
  }

  @keyframes typing {
    from {
      width: 0
    }
  }
    
  @keyframes blink {
    50% {
      border-color: transparent
    }
  }
</style>
