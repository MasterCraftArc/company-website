<script>
	import Button from '../Button.svelte';
	import badges from '../../images/svg/company-badges.svg';
	import glow from '../../images/svg/section-3-glow.svg';
	import mobileBadges from '../../images/svg/mobile-badges.svg'

	$: innerWidth = 0
</script>
<svelte:window bind:innerWidth/>
{#if innerWidth < 1200}
<section class="mobile-section">
	<div class="text-container-mobile">

		<h1 class="mobile">Trusted by The Most</h1>
		<h1 class="mobile"><span>Critical Systems</span></h1>
		<h1 class="mobile">in the world</h1>
	<p>
		Most IT companies use the same set of tools and technology. Why settle for an IT provider that's
		boring, unclear, and intimidating? At Parried we approach IT support with a passion for <span
			>helping businesses succeed</span
		>
	</p>
	<Button link="/" text="Learn More" />
</div>
	<img src={mobileBadges} alt="mobile-badges" loading="lazy" class="mobile-badges" />
</section>
{:else}
<section class="section">
	<div class="h1-Container">
		<img src={glow} alt="" loading="lazy" class="glow" />
		<h1>Trusted by The Most <span>Critical </span>Systems in The World</h1>
	</div>
	<p>
		Most IT companies use the same set of tools and technology. Why settle for an IT provider that's
		boring, unclear, and intimidating? At Parried we approach IT support with a passion for <span
			>helping businesses succeed</span
		>
	</p>
	<Button link="/" text="Learn More" />
	<img src={badges} alt="badges" loading="lazy" />
</section>
{/if}
<style>

	.mobile-badges{
		max-width: 300px;
		width: 100vw;
		height: auto;
	}

	.section {
		gap: 2rem;
		position: relative;
	}
	img {
		width: 100%;
	}

	img {
		width: 800px;
		height: 300px;
	}

	.glow {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
