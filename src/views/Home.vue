<template>
  <Title />
  <SortSlajd1 />
  <ZegarSlajd1 />
  <Bg3DSlajd1 />
  <Buttons />
  <TablicaWynikow />
  <Buttons2 />
  <Buttons3 />
</template>

<script>
import SortSlajd1 from "@/components/Slajdy/Sort/SortSlajd1.vue";
import ZegarSlajd1 from "@/components/Slajdy/Zegar/ZegarSlajd1.vue";
import Bg3DSlajd1 from "@/components/Slajdy/Background3D/Bg3DSlajd1.vue";
import Buttons from "@/components/Slajdy/Buttons/Buttons.vue";
import TablicaWynikow from "@/components/TablicaWynikow/TablicaWynikow.vue";
import Buttons2 from "@/components/Slajdy/Buttons2/Buttons2.vue";
import Buttons3 from "@/components/Slajdy/Buttons3/Buttons3.vue";
import Title from "@/components/Slajdy/Title/Title.vue";

export default {
  name: "Home",
  components: {
    SortSlajd1,
    ZegarSlajd1,
    Bg3DSlajd1,
    Buttons,
    TablicaWynikow,
    Buttons2,
    Buttons3,
    Title,
  },
};
</script>
