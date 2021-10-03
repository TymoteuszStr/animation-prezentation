<template>
  <ZegarSlajd1 />
  <Bg3DSlajd1 />
</template>

<script>
import ZegarSlajd1 from "@/components/Slajdy/Zegar/ZegarSlajd1.vue";
import Bg3DSlajd1 from "@/components/Slajdy/Background3D/Bg3DSlajd1.vue";

export default {
  name: "Home",
  components: {
    ZegarSlajd1,
    Bg3DSlajd1,
  },
};
</script>
