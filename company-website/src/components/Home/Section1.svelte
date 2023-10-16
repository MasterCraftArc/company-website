<script>
	import Button from '../Button.svelte';
	import TypeWriter1 from '../TypeWriter1.svelte';
	import MobileSection1 from './MobileSection1.svelte';
	$: innerWidth = 0;

	let whiteheader = ['Defense Unicorns is a', 'Modern Software Prime'];
	let glowing = 'Modern Software Prime';
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileSection1 />
{:else}
	<section class="section1">
		<div class="text-container">
			<TypeWriter1 headings={whiteheader} glowHeader={glowing} />
			<p>
				We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
				of mind with expert IT suppoort and services.
			</p>
			<Button link="/" text="Contact Us" />
		</div>
		<div class="text-container2">
			<div class="h1-container">
				<h1>Deploy Your <span>Misson</span> Applications</h1>
				<h1>Where Your <span>Mission Demands Are</span></h1>
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
	p {
		padding-bottom: 1rem;
	}

	.text-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	.text-container2 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	section {
		padding-top: 5rem;
		padding-bottom: 0rem;
		background-image: url('../../images/png/Hero.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		gap: 40rem;
	}

	h1 {
		font-size: 56px;
	}

	@media (max-width: 400px) {
		h1 {
			max-width: 350px;
			height: 100px;
		}
	}
</style>
