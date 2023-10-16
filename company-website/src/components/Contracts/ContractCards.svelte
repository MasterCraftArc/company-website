<script>
	import CardGlow from '../Home/CardGlow.svelte';

	import zarfGlow from '../../images/svg/product-glows/zarf-header-glow.svg';
	import zarfCardGlow from '../../images/svg/product-glows/zarf-card-glow.svg';
</script>

<section>
	<div class="foreground">
		<div class="h1-container">
			<img src={zarfGlow} alt="header-glow" loading="lazy" class="head" />

			<h1><slot name="header" /></h1>
		</div>
	</div>
	<div class="container">
		<div class="left"><slot name="left" /></div>
		<div class="right"><slot name="right" /></div>
	</div>
	<slot name="button" />
	<div class="card-glow"><CardGlow glowLeft={zarfCardGlow} glowRight={zarfCardGlow} /></div>
</section>

<style>
	.h1-container{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card-glow {
		margin-top: -50rem;
		z-index: -1;
	}

	section {
		padding-top: 0rem;
		padding-bottom: 0rem;
	}

	.foreground {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.left,
	.right {
		background-color: black;
		padding: 2rem;
	}

	.head {
		position: absolute;

		z-index: -1;
		width: 2000px;
		height: auto;
	}

	.container {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
	}

	section {
		gap: 5rem;
	}

	.left {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 550px;
		height: 350px;
		border-radius: 25px;
		border: 1px grey solid;
	}
	.right {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 550px;
		height: 350px;
		border-radius: 25px;
		border: 1px grey solid;
	}

	@media (max-width: 1199px) {
		.container {
			flex-direction: column;
			gap: 3rem;
		}

		.left,
		.right {
			width: 350px;
		}
	}
</style>
