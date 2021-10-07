<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    :centered-slides="true"
    :navigation="true"
  >
    <swiper-slide><Title /> </swiper-slide>
    <swiper-slide><SortSlajd1 /> </swiper-slide>
    <swiper-slide><Buttons /> </swiper-slide>
    <swiper-slide><Buttons2 /> </swiper-slide>
    <swiper-slide><Buttons3 /> </swiper-slide>
    <swiper-slide><ZegarSlajd1 /> </swiper-slide>
    <swiper-slide><Bg3DSlajd1 /> </swiper-slide>
    <swiper-slide><Animation /> </swiper-slide>
    <swiper-slide><InstructionColors /> </swiper-slide>
    <swiper-slide><RandomColor /> </swiper-slide>
  </swiper>
</template>

<script>
import SortSlajd1 from "@/components/Slajdy/Sort/SortSlajd1.vue";
import ZegarSlajd1 from "@/components/Slajdy/Zegar/ZegarSlajd1.vue";
import Bg3DSlajd1 from "@/components/Slajdy/Background3D/Bg3DSlajd1.vue";
import Buttons from "@/components/Slajdy/Buttons/Buttons.vue";
import RandomColor from "@/components/Color/RandomColor.vue";
import Buttons2 from "@/components/Slajdy/Buttons2/Buttons2.vue";
import Buttons3 from "@/components/Slajdy/Buttons3/Buttons3.vue";
import Title from "@/components/Slajdy/Title/Title.vue";
import InstructionColors from "@/components/Slajdy/InstructionColors/InstructionColors.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);

import Animation from "@/components/Slajdy/Animation/Animation.vue";
export default {
  name: "Home",
  components: {
    SortSlajd1,
    ZegarSlajd1,
    Bg3DSlajd1,
    Buttons,
    RandomColor,
    Buttons2,
    Buttons3,
    Title,
    InstructionColors,
    Swiper,
    SwiperSlide,
    Animation,
  },
};
</script>
