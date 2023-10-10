<script>
	import Button from '../Button.svelte';
	let glowing = 'Open Source';
	let glowing1 = 'Zarf';
</script>

<section>
	<div class="text-container">
		<h1>Defense Unicorns is <span>{glowing}</span></h1>

		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
	</div>
	<div class="text-container">
		<h1><span>{glowing1}</span> - Air Gap Software Delivery</h1>
		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
	</div>
</section>

<style>
	section {
		padding: 5rem 0;
		background-image: url('../../images/png/Hero.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		gap: 40rem;
		padding-bottom: 1rem;
	}

	@media screen and (max-width: 1200px) {
		h1 {
			width: 350px;
			min-height: 100px;
		}
	}
</style>
