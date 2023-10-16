<script>
	import Button from '../Button.svelte';
	import hero from '../../images/svg/products-hero/products-hero.svg';
	import zarfGlow from '../../images/svg/product-glows/zarf-header-glow.svg';
	import ColorCube from './ColorCube.svelte';
	import headerGlow from '../../images/svg/product-glows/header-glow.svg';
	import MobileSection1 from './mobile/MobileSection1.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileSection1 />
{:else}
	<section>
		<div class="foreground">
			<div class="h1-container">
				<img src={headerGlow} alt="header-glow" loading="lazy" class="glow" />
				<h1>Defense Unicorns is <span>Open Source</span></h1>
			</div>
			<p>
				We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
				of mind with expert IT suppoort and services.
			</p>
			<Button link="/" text="Contact Us" />
			<div class="color-container">
				<img src={hero} alt="hero" loading="lazy" class="hero" />
				<ColorCube />
			</div>
		</div>
		<div class="text-container">
			<div class="h1-container">
				<img src={zarfGlow} alt="header-glow" loading="lazy" class="glow" />
				<h1><span>Zarf</span> - Air Gap Software Delivery</h1>
			</div>
			<p>
				We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
				of mind with expert IT suppoort and services.
			</p>
			<Button link="/" text="Contact Us" />
		</div>
	</section>
{/if}

<style>
	.color-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.h1-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.glow {
		position: absolute;
		z-index: -1;
	}

	.h1-container h1 {
		position: relative;
		z-index: 1;
	}

	section {
		padding: 5rem 0;
		gap: 5rem;
		padding-bottom: 0;
	}

	.foreground {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	.text-container {
		padding-top: 7rem;
		padding-bottom: 7rem;
	}

	.hero {
		width: 800px;
		height: 600px;
		z-index: 2;
		position: relative;
	}

	@media screen and (max-width: 1200px) {
		h1 {
			width: 350px;
			min-height: 100px;
		}
	}

	@media screen and (max-width: 800px) {
		.hero {
			width: 500px;
			height: 500px;
		}
	}

	@media screen and (max-width: 500px) {
		.hero {
			width: 300px;
			height: 300px;
		}
	}
</style>
