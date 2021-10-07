<template>
  <SlajdWrapper>
    <div class="container">
      <h5 class="typing-animation">Kolory</h5>
      <section class="divWrapper">
      <div class="badge" style="background-color:#000000">(0,0,0) #000000</div>
      <div class="badge" style="background-color:#FFFFFF; color: black;">(255,255,255) #FFFFFF</div>
      <div class="badge" style="background-color:#FF0000">(255, 0, 0) #FF0000</div>
      <div class="badge" style="background-color:#FF00FF">(255, 0, 255) #FF00FF</div>
      <div class="badge" style="background-color:#878787">(135, 135, 135) #878787</div>
      <div class="badge" style="background-color:#87FF87">(135, 135, 135) #87FF87</div>
      </section>
      <img src="@/assets/colour-wheel.svg">
      
    </div>
  </SlajdWrapper>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "InstructionColors",
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
h5 {
  text-align:center;
  font-size: 36px;
  margin-bottom: 2rem;
}
.divWrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 60%;
}
img {
  width: 30vw;
  position: absolute;
  top:0;
  right: 0;
  height: 100%;
}
.badge{
  width: 11rem;
  height: 11rem;
  margin: 1rem;
  border-radius: 0.3rem;
  border: solid 0px;
  display:flex;
  align-items: center;
  justify-content: center;
  

}
  
</style>
