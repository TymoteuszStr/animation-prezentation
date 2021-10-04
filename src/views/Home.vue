<template>
  <SortSlajd1 />
  <ZegarSlajd1 />
  <Bg3DSlajd1 />
</template>

<script>
import SortSlajd1 from "@/components/Slajdy/Sort/SortSlajd1.vue";
import ZegarSlajd1 from "@/components/Slajdy/Zegar/ZegarSlajd1.vue";
import Bg3DSlajd1 from "@/components/Slajdy/Background3D/Bg3DSlajd1.vue";

export default {
  name: "Home",
  components: {
    SortSlajd1,
    ZegarSlajd1,
    Bg3DSlajd1,
  },
};
</script>
