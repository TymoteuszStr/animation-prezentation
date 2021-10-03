<template>
  <div class="wrapper">
    <div class="slajd-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  border: 10px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slajd-container {
  border: 4px solid red;
  width: 90%;
  height: 80%;
  position: relative;
}
</style>
