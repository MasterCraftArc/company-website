<script>
	import Button from '../../Button.svelte';
	import hero from '../../../images/svg/products-hero/products-hero.svg';
	let innerWidth;
</script>

<section>
	<div class="foreground">
		<div class="h1-container">
			<h1>Defense Unicorns is <span>Open Source</span></h1>
		</div>
		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
		<div class="color-container">
			<img src={hero} alt="hero" loading="lazy" class="hero" />
		</div>
	</div>
	<div class="text-container">
		<div class="h1-container">
			<h1><span>Zarf</span> - Air Gap Software Delivery</h1>
		</div>
		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
	</div>
</section>

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

	.h1-container h1 {
		position: relative;
		z-index: 1;
	}

	section {
		padding: 5rem 0;

		gap: 10rem;
		padding-bottom: 1rem;
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
