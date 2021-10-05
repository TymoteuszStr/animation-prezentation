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
  border-radius: 6px;
  width: 90%;
  height: 80%;
  position: relative;
  background-color: #3c5b74;
  -webkit-box-shadow: 0px 0px 28px -3px rgba(0, 36, 63, 1);
  -moz-box-shadow: 0px 0px 28px -3px rgba(0, 36, 63, 1);
  box-shadow: 0px 0px 28px -3px rgba(0, 36, 63, 1);
}
</style>
