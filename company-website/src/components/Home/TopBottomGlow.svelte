<script>
	import greenGlow from '../../images/svg/green-glow.svg';
	import blueGlow from '../../images/svg/section-3-glow.svg';
</script>

<div class="glow-container">
	<div class="green pulse">
		<img src={greenGlow} alt="" />
	</div>

	<div class="blue glow">
		<img src={blueGlow} alt="" />
	</div>
</div>

<style>
	.glow-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100vw;
		z-index: -1;
	}

	.green img,
	.blue img {
		max-width: 100%;
		width: 100%;
	}

	.green {
		width: 100vw;
		margin-bottom: -25rem;
		z-index: -1;
	}

	.blue {
		z-index: -1;
		width: 100vw;
		margin-top: -25rem;
	}
</style>
