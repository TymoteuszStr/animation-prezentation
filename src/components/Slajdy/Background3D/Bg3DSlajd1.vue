<!-- @format -->

<template>
	<SlajdWrapper id="slajdWrapper">
		<div class="bg3Wrapper" id="container">
			<div class="glass" id="glass">
				<div class="showCodeBtn" @click="showCode = !showCode">SHOW CODE</div>
				<code v-if="showCode" class="code">
					<b>css:</b><br /><br />
					.body{<br />perspective: 1000px;<br />}<br />
					.card { <br />transform-style: preserve-3d;<br />
					backdrop-filter: blur(24px);<br />
					background:linear-gradient(to right bottom, #ffffffb3,#ffffff4d);<br />} <br /><br /><b>javascript</b>:<br /><br />
					card.addEventListener("mousemove", (e) => <br />{ <br />
					let xAxis = (window.innerWidth/2 - e.pageX)/40 <br />let yAxis = (window.innerHeight/2 - e.pageY )/40
					<br />glassCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)` <br />});
				</code>
			</div>
			<Circle :size="300" style="bottom: 50px; left: 15%" />
			<Circle :size="340" style="top: 50px; right: 14%" />
		</div>
	</SlajdWrapper>
</template>

<script>
	import { onMounted, ref } from "vue"
	import SlajdWrapper from "../SlajdWrapper.vue"
	import Circle from "@/components/Slajdy/Background3D/Circle.vue"

	export default {
		name: "Bg3D",
		components: {
			SlajdWrapper,
			Circle,
		},
		setup() {
			let showCode = ref(false)
			onMounted(() => {
				const glassCard = document.querySelector("#glass")

				glassCard.addEventListener("mousemove", (e) => {
					let xAxis = (window.innerWidth / 2 - e.pageX) / 40
					let yAxis = (window.innerHeight / 2 - e.pageY + 1250) / 40
					glassCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`
				})

				glassCard.addEventListener("mouseenter", (e) => {
					glassCard.style.transition = "none"
				})
				glassCard.addEventListener("mouseleave", (e) => {
					console.log("mouseleave")
					glassCard.style.transition = "all 1s ease"
					glassCard.style.transform = `rotateY(0deg) rotateX(0deg)`
				})
			})
			return { showCode }
		},
	}
</script>
<style lang="scss" scoped="true">
	.bg3Wrapper {
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.glass {
			transform-style: preserve-3d;
			min-height: 80%;
			width: 60%;
			background: linear-gradient(to right bottom, #ffffffb3, #ffffff4d);
			margin-left: auto;
			margin-right: auto;
			border-radius: 20px;
			z-index: 10;
			backdrop-filter: blur(24px);
			max-height: 80vh;
			box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
		}
	}
	.showCodeBtn {
		margin-left: 50%;
		width: 100%;
		text-align: center;
		transform: translateX(-50%);
		color: #303030;
		&:hover {
			cursor: pointer;
		}
	}
	.code {
		margin-left: 50%;
		width: 100%;
		transform: translateX(-50%);
		color: #303030;
		font-size: 18px;
	}
	@media (max-width: 959px) {
		.glass {
			width: 80%;
			max-height: initial;
			min-height: 70vh;
			.dashboard {
				width: 100%;
				max-height: initial;
			}
		}
	}
</style>
