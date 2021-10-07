<template>
  <Title />
  <SortSlajd1 />
  <ZegarSlajd1 />
  <Bg3DSlajd1 />
  <Buttons />  
  <Buttons2 />
  <Buttons3 />
  <Animation/>
  <InstructionColors/>
  <RandomColor />

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
    Animation,
  },
};
</script>
