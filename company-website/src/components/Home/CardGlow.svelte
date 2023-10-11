<script>
	export let glowRight;
	export let glowLeft;
</script>

<div class="glow-container">
	<div class="yellow pulse">
		<img src={glowLeft} alt="yellow glow" loading="lazy" />
	</div>
	<slot />
	<div class="blue glow">
		<img src={glowRight} alt="blue glow" loading="lazy" />
	</div>
</div>

<style>
	.glow-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100vw;
		z-index: -1;
	}

	.yellow img,
	.blue img {
		max-width: 100%;
		width: 1200px;
		height: 1200px;
		max-height: 900px;
	}

	@media (max-width: 1200px) {
		.glow-container {
			flex-direction: column;
		}

		.yellow img,
		.blue img {
			min-width: 100vw;
			height: 1200px;
		}
	}
</style>
