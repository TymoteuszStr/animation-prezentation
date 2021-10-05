<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  scroll-behavior: smooth;
  background-color: whitesmoke;
  min-height: 100vh;
  max-width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  perspective: 1000px;
}
</style>
