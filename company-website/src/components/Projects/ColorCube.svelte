<script>
	import zarfGlow from '../../images/svg/product-glows/zarf-card-glow.svg';
	import leapfrogGlow from '../../images/svg/product-glows/leapfrog-card-glow.svg';
	import peprGlow from '../../images/svg/product-glows/pepr-card-glow.svg';
	import lulaGlow from '../../images/svg/product-glows/lula-card-glow.svg';
</script>

<div class="color-container">
	<div class="left">
		<img src={zarfGlow} alt="" class="glow" loading="lazy" />

		<img src={peprGlow} alt="" class="glow" loading="lazy" />
	</div>
	<div class="right">
		<img src={leapfrogGlow} alt="" class="glow" loading="lazy" />
		<img src={lulaGlow} alt="" class="glow" loading="lazy" />
	</div>
</div>

<style>
	.color-container {
		position: absolute;
		z-index: -1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 500px;
	}

	.glow {
		width: 600px;
		height: 350px;
	}
</style>
