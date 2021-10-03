<template>
  <SlajdWrapper>
    <div class="zegarSlajd">
      <div class="clock">
        <div class="clock-face">
          <div class="hand hour-hand"></div>
          <div class="hand min-hand"></div>
          <div class="hand second-hand"></div>
        </div>
      </div>
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted } from "vue";
import SlajdWrapper from "../SlajdWrapper.vue";
export default {
  name: "Home",
  components: {
    SlajdWrapper,
  },
  setup() {
    onMounted(() => {
      const secondHand = document.querySelector(".second-hand");
      const minHand = document.querySelector(".min-hand");
      const hourHand = document.querySelector(".hour-hand");
      function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        removeAnimaition(seconds);
        const secDeg = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secDeg}deg)`;

        const mins = now.getMinutes();
        const minDeg = (mins / 60) * 360 + 90;
        minHand.style.transform = `rotate(${minDeg}deg)`;

        const hour = now.getHours();
        const hourDeg = (hour / 12) * 360 + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
      }
      setInterval(setDate, 1000);
      function removeAnimaition(sec) {
        if (sec) return;
        secondHand.style.transition = "none";
        setTimeout(() => {
          secondHand.style.transition = `all 0.05s`;
        }, 1000);
      }
    });
    return {};
  },
};
</script>

<style lang="scss">
.zegarSlajd {
  position: absolute;
  background: #018ded;
  text-align: center;
  font-size: 10px;

  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .clock {
    width: 500px;
    height: 500px;
    border: 20px solid white;
    border-radius: 50%;
    position: relative;
    padding: 20px;
    box-shadow: 0 0 0px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
      inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
  }

  .hand {
    width: 50%;
    height: 6px;
    background-color: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.1s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.6, 1);
  }
  .hour-hand {
    width: 30%;
    left: 20%;
  }
  .min-hand {
    width: 40%;
    left: 10%;
  }
}
</style>
