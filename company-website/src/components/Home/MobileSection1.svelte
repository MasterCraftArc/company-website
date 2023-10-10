<script>
	import Button from '../Button.svelte';
	import TypeWriter1 from '../TypeWriter1.svelte';
	let whiteheader = ['Defense Unicorns is a', 'Modern Software Prime'];
	let glowing = 'Modern Software Prime';
</script>

<section class="mobile-section">
	<div class="text-container-mobile">
		<TypeWriter1 headings={whiteheader} glowHeader={glowing} />
		<Button link="/" text="Contact Us" />
	</div>
	<div class="text-container-mobile2">
		<h1 class="mobile">Deploy Your</h1>
		<h1 class="mobile"><span>Mission Applications</span></h1>
		<h1 class="mobile">Where Your</h1>
		<h1 class="mobile"><span>Mission Demands</span></h1>
		<h1 class="mobile">Are</h1>
		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
	</div>
</section>

<style>
	.mobile {
		font-size: 36px;
	}

	h1 {
		height: auto;
	}

	.text-container-mobile2 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	section {
		padding: 5rem 0;
		background-image: url('../../images/png/Hero.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		gap: 40rem;
	}
</style>
