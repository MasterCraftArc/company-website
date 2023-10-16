<script>
	import badges from '../../images/svg/company-badges.svg';
	import mobileBadges from '../../images/svg/mobile-badges.svg';
	import headerGlow from '../../images/svg/product-glows/zarf-header-glow.svg';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<section>
		<div>
			<div class="foreground">
				<div class="h1-container">
					<h1>Defense Unicorns Is Trusted By the Most</h1>
					<h1><span>Critical Systems</span> in the World</h1>
				</div>
			</div>
		</div>
		<div class="img-holder">
			<img src={mobileBadges} alt="mobile-badges" loading="lazy"/>
		</div>
	</section>
{:else}
	<section>
		<div>
			<div class="foreground">
				<div class="h1-container">
					<img src={headerGlow} alt="header-glow" loading="lazy" class="glow" />
					<h1>Defense Unicorns Is Trusted By the Most</h1>
					<h1><span>Critical Systems</span> in the World</h1>
				</div>
			</div>
		</div>
		<div class="img-holder">
			<img src={badges} alt="badges" loading="lazy"/>
		</div>
	</section>
{/if}

<style>

.glow {
		position: absolute;
		top: -15rem;
		left: -30rem;
		z-index: -1;
		width: 200%;
		height: auto;
	}
	img {
		width: 100%;
	}
	.h1-container {
		position: relative;
		display: inline-block;
	}

	section {
		padding-top: 5rem;
		gap: 5rem;
	}
	@media (max-width: 400px) {
		h1 {
			width: 100vw;
		}
		img {
			width: 100vw;
		}
	}
</style>
