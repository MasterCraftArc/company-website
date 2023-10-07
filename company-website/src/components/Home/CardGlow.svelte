<script>
	import yellowGlow from '../../images/svg/yellow-glow.svg';
	import blueGlow from '../../images/svg/blue-glow.svg';
</script>

<div class="glow-container">
	<div class="yellow pulse">
		<img src={yellowGlow} alt="yellow glow" loading="lazy"/>
	</div>
	<slot />
	<div class="blue glow">
		<img src={blueGlow} alt="blue glow"  loading="lazy" />
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
		width: 900px;
		height: auto;
		max-height: 900px;
	}

	@media (max-width: 1200px) {
		.glow-container {
			flex-direction: column;
		}
	}
</style>
