<template>
  <ZegarSlajd1 />
  <Bg3DSlajd1 />
  <Buttons />
</template>

<script>
import ZegarSlajd1 from "@/components/Slajdy/Zegar/ZegarSlajd1.vue";
import Bg3DSlajd1 from "@/components/Slajdy/Background3D/Bg3DSlajd1.vue";
import Buttons from "@/components/Slajdy/Buttons/Buttons.vue";

export default {
  name: "Home",
  components: {
    ZegarSlajd1,
    Bg3DSlajd1,
    Buttons
  },
};
</script>
