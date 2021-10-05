<template>
  <SlajdWrapper id="slajdWrapper">
    <div class="bg3Wrapper" id="container">
      <div class="glass" id="glass"></div>
      <Circle :size="300" style="bottom: 50px; left: 15%" />
      <Circle :size="340" style="top: 50px; right: 14%" />
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted, ref } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
import Circle from "@/components/Slajdy/Background3D/Circle.vue";

export default {
  name: "Bg3D",
  components: {
    SlajdWrapper,
    Circle,
  },
  setup() {
    onMounted(() => {
      const glassCard = document.querySelector("#glass");
      const container = document.querySelector("#container");
      const slajd = document.querySelector("#slajdWrapper");
      glassCard.addEventListener("mousemove", (e) => {
        let xAxis = (slajd.clientHeight / 2 - e.pageX + 180) / 50;
        let yAxis = (slajd.clientWidth / 2 - e.pageY + 2000) / 50;
        glassCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
      });

      glassCard.addEventListener("mouseenter", (e) => {
        glassCard.style.transition = "none";
      });
      glassCard.addEventListener("mouseleave", (e) => {
        console.log("mouseleave");
        glassCard.style.transition = "all 1s ease";
        glassCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    });
    return {};
  },
};
</script>
<style lang="scss" scoped="true">
.bg3Wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right top, #264b77, #69a4eb);

  .glass {
    transform-style: preserve-3d;
    display: flex;
    min-height: 80%;
    width: 60%;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    z-index: 10;
    backdrop-filter: blur(24px);
    max-height: 80vh;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 959px) {
  .glass {
    width: 80%;
    max-height: initial;
    min-height: 70vh;
    .dashboard {
      width: 100%;
      max-height: initial;
    }
  }
}
</style>
