<template>
  <SlajdWrapper>
    <div class="button-container">
      <a @click="showCode = !showCode" class="button-link">
        ONLY ONE
      </a>
    </div>
    <code v-if="showCode" class="code">
      <pre>
        .button-link{
          ...
          z-index:1;
          transition: color .5s ease-out;
          transition-delay: .5s;
          &:hover {
          color: $thirdary;
          }
          &:after{
            content: "";
            position: absolute; top:0; left:0;
            ...
            border: solid 1px whitesmoke;
            border-left: none; border-right: none;
            transition: width .5s ease-out;
            width: 0%;
          }
          &:before{
            content: "";
            width: 0%;
            height: 100%;
            position: absolute; right:0;
            z-index:-1;
            background-color: whitesmoke;
            transition: width 0.5s ease-out;
            transition-delay: 0.5s;
            
          }
          &:hover:before{
            width: 100%;
          }
          &:hover:after{
            width: 100%;
          }
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
  name: "Buttons2",
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

.code {
  font-size:0.8rem;
}
.button-link {
  font-size: 2rem;
  color: $font-color;
  text-decoration: none;
}

.button-container {
  width: 60%;
  height: 60%;
  margin: 10% 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.button-link{
  font-size: 1.5rem;
  width: 150px;
  position: relative;
  text-align:center;
  vertical-align: center;
  z-index:1;
  transition: color .5s ease-out;
  transition-delay: .5s;
  &:hover {
   color: $thirdary;
 }
  &:after{
    content: "";
    position: absolute;
    top:0;
    left:0;
    border: solid 1px whitesmoke;
    border-left: none;
    border-right: none;
    transition: width .5s ease-out;
    
    height: 100%;
    width: 0%;
  }
  &:before{
    content: "";
    width: 0%;
    position: absolute;
    height: 100%;
    right:0;
    z-index:-1;
    background-color: whitesmoke;
    transition: width 0.5s ease-out;
    transition-delay: 0.5s;
    
  }
  &:hover:before{
    border: solid 1px whitesmoke;
    border-left: none;
    border-right: none;
    width: 100%;
  }
   &:hover:after{
    width: 100%;
  }
 
}
.button-link:hover > .circle {
    width: 15rem;
}
</style>
