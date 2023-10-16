<script>
	import Button from '../Button.svelte';
	import badges from '../../images/svg/company-badges.svg';
	import glow from '../../images/svg/section-3-glow.svg';
	import mobileBadges from '../../images/svg/mobile-badges.svg';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<section class="mobile-section">
		<div class="text-container-mobile">
			<div>
				<h1 class="mobile">Trusted by The Most</h1>
				<h1 class="mobile"><span>Critical Systems</span></h1>
				<h1 class="mobile">in the world</h1>
			</div>
			<p>
				Most IT companies use the same set of tools and technology. Why settle for an IT provider
				that's boring, unclear, and intimidating? At Parried we approach IT support with a passion
				for <span>helping businesses succeed</span>
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
			Most IT companies use the same set of tools and technology. Why settle for an IT provider
			that's boring, unclear, and intimidating? At Parried we approach IT support with a passion for <span
				>helping businesses succeed</span
			>
		</p>
		<Button link="/" text="Learn More" />
		<img src={badges} alt="badges" loading="lazy" class="badges"/>
	</section>
{/if}

<style>
	.mobile-badges {
		max-width: 300px;
		width: 100vw;
		height: 528px;
	}

	.section {
		gap: 2rem;
		padding-bottom: 0rem;
		position: relative;
	}
	img {
		width: 100%;
		margin-top: -6rem;
		z-index: -1;
	}
	.badges{
		width: 100%;
		padding-top: 5rem;
		margin: 0;
	}



	.glow {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.mobile-badges {
		padding-top: 2rem;
	}
</style>
