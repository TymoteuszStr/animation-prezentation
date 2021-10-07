22
<template>
  <SlajdWrapper>
    <div class="randomColorWrapper">
      <div class="leftSide">
        <div
          class="colorContainer"
          :style="`background-color:rgb(${r},${g},${b});`"
        ></div>
        <button class="colorBtn" @click="randColor()">LOSUJ KOLOR</button>
      </div>
      <div class="rightSide">
        <div class="inputWrapper">
          <label>ODPOWIEDŹ:</label>
          <div>
            <label> R: </label>
            <input type="number" min="0" max="255" v-model="answer[0]" />
          </div>
          <div>
            <label> G: </label>
            <input type="number" min="0" max="255" v-model="answer[1]" />
          </div>
          <div>
            <label> B: </label>
            <input type="number" min="0" max="255" v-model="answer[2]" />
          </div>
          <div>
            <button class="colorBtn" @click="oblicz()">OBLICZ WYNIK</button>
          </div>
        </div>
        <div class="answerWrapper">
          <div class="chart" @click="restScore()">
            <transition>
              <div
                v-if="showFill"
                class="chart--fill"
                :style="`background-color:rgb(${answer[0]},${answer[1]},${answer[2]}); height: ${fillHeight}%;`"
              >
                <span class="score" v-show="showScore">
                  {{ fillHeight.toPrecision(4) }}%
                </span>
              </div>
            </transition>
          </div>
          <label>WYNIK</label>
        </div>
      </div>
    </div>
  </SlajdWrapper>
</template>

<script>
import { onMounted, ref } from "vue";
import SlajdWrapper from "@/components/Slajdy/SlajdWrapper.vue";

export default {
  name: "Tablica",
  components: {
    SlajdWrapper,
  },
  setup() {
    const randNr = () => Math.floor(Math.random() * 256);
    let r = ref(randNr());
    let g = ref(randNr());
    let b = ref(randNr());
    let answer = ref([]);
    let showScore = ref(false);
    let showFill = ref(true);
    let fillHeight = ref(0);
    const randColor = () => {
      r.value = randNr();
      g.value = randNr();
      b.value = randNr();
    };
    const MAX_SCORE = 441.6729559300637;

    function calculateDiff(colorQuess, colorAnswer) {
      const diffR = Math.pow(colorQuess[0] - colorAnswer[0], 2);
      const diffB = Math.pow(colorQuess[1] - colorAnswer[1], 2);
      const diffG = Math.pow(colorQuess[2] - colorAnswer[2], 2);
      return Math.pow(diffR + diffG + diffB, 1 / 2);
    }

    const oblicz = () => {
      console.log(calculateDiff([r.value, g.value, b.value], answer.value));
      fillHeight.value =
        (100 * (MAX_SCORE - calculateDiff([r.value, g.value, b.value], answer.value))) /
        MAX_SCORE;

      setTimeout(() => {
        showScore.value = true;
      }, 5000);
    };
    const restScore = () => {
      fillHeight.value = 0;
      answer.value = [];
      showScore.value = false;
    };
    return {
      r,
      g,
      b,
      randColor,
      calculateDiff,
      MAX_SCORE,
      answer,
      showFill,
      oblicz,
      fillHeight,
      restScore,
      showScore,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/style.scss";

.randomColorWrapper {
  display: flex;
}
.leftSide {
  padding-right: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 50px;
  .colorContainer {
    border: 2px solid white;
    width: 80%;
    height: 500px;
    border-radius: 30px;
  }
}
.rightSide {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 50px;
  .inputWrapper {
    display: flex;
    flex-direction: column;
    input {
      width: 250px;
      height: 50px;
      font-size: 24px;
    }
  }
  label {
    font-size: 24px;
    margin: 10px 0;
  }
}
.colorBtn {
  width: 300px;
  border-radius: 50px;
  height: 80px;
  background-color: $main-color;
  color: white;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  padding: 20px;
  margin-top: 50px;
}
.answerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chart {
  margin-bottom: 65px;
  position: relative;
  height: 500px;
  width: 200px;
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 20px;
  &--fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-radius: 30px;
    transition: all 5s ease-out;
    display: flex;
    justify-content: center;

    .score {
      display: flex;
      padding-top: 10px;
      font-size: 24px;
      font-weight: 700;
      text-shadow: 1px 1px #000000;
      animation: bounceIn 0.8s;
    }
  }
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>
