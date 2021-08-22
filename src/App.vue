<template>
		<router-view></router-view>
</template>
<script>

export default {
  name: "App",
  components: {
 },
};
</script>
<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
	}

	body {
		overscroll-behavior: contain;
	}

	#app {
		scroll-behavior: smooth;
		background-color:whitesmoke;
		min-height: 100vh;
		max-width: 100%;
	}

</style>
