<template>
  <SlajdWrapper>
    <div class="container">
      <h5 class="typing-animation">Kolory</h5>
      <section class="divWrapper">
        <div class="badge" style="background-color: #000000">(0,0,0) #000000</div>
        <div class="badge" style="background-color: #ffffff; color: black">
          (255,255,255) #FFFFFF
        </div>
        <div class="badge" style="background-color: #878787">(135, 135, 135) #878787</div>
        <div class="badge" style="background-color: #ff0000">(255, 0, 0) #FF0000</div>
        <div class="badge" style="background-color: #ff00ff">(255, 0, 255) #FF00FF</div>
        <div class="badge" style="background-color: #14debc">(20, 222, 188) #14DEBC</div>
      </section>
      <img src="@/assets/colors.png" />
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
.container {
  padding-top: 2rem;
}
h5 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 2rem;
}
.divWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 60%;
}
img {
  width: 30vw;
  height: 30vw;
  position: absolute;
  top: 6rem;
  right: 2rem;
}
.badge {
  width: 15rem;
  height: 15rem;
  margin: 2rem;
  border-radius: 0.3rem;
  border: solid 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
</style>
