<!-- @format -->

@import "@/style/style.scss";
<template>
	<router-view></router-view>
</template>
<script>
	export default {
		name: "App",
		components: {},
	}
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
		background-color: #a3acb1;
		min-height: 100vh;
		max-width: 100%;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		perspective: 2000px;
		font-family: "Space Mono", monospace;
		color: whitesmoke;
	}
	.code {
		position: absolute;
		top: 50px;
		left: 50px;
		color: white;
		font-size: 18px;
	}
	button,
	a {
		&:hover {
			cursor: pointer;
		}
	}
</style>
