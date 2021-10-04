<template>
  <SlajdWrapper>
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
      console.log(container.width);
      glassCard.addEventListener("mousemove", (e) => {
        let xAxis = (container.clientHeight / 2 - e.pageX + 300) / 70;
        let yAxis = (container.clientWidth / 2 - e.pageY + 1000) / 70;
        console.log("xAxis: ", xAxis, "yAxis: ", yAxis);
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
  background: linear-gradient(to right top, #2596be, #6cdbeb);

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
