<template>
  <SlajdWrapper>
    <div class="container">
      <h5 class="typing-animation">Prosty przepis na animację</h5>
      <h4 class="typing-animation">I niewiele więcej...</h4>
      <p class="showCodeBtn" @click="showCode = !showCode">SHOW CODE</p>
      <div class="code"></div>
      <code v-if="showCode" class="code">
      <pre>
      @mixin typinganimation($steps) {
        width: #{$steps}ch;    
        animation: typing 2s steps(#{$steps}), 
          blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
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
      </pre>
    </code>
    </div>
  </SlajdWrapper>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "Title",
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

  @mixin typinganimation($steps) {
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
    @include typinganimation(27);
  }
  h4 {
    font-size: 26px;
    @include typinganimation(20);
    // animation-delay: 2s;

  
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
