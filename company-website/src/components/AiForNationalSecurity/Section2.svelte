<script>
	import CardGlow from '../Home/CardGlow.svelte';
	import leapfrogGlow from '../../images/svg/product-glows/leapfrog-card-glow.svg';
</script>

<section>
	<div>
		<h1>AI For National Security</h1>
		<h1>Launch Count Down</h1>
	</div>
	<div class="container">
		<div class="card-glow"><CardGlow glowLeft={leapfrogGlow} glowRight={leapfrogGlow} /></div>
		<div class="text-container">
			<h1>2</h1>
			<h1>DAYS</h1>
		</div>
		<div class="text-container">
			<h1>23</h1>
			<h1>HOURS</h1>
		</div>
		<div class="text-container">
			<h1>46</h1>
			<h1>MINUTES</h1>
		</div>
	</div>
</section>

<style>
	.card-glow {
		position: absolute;
		top: 72rem;
		left: 0;
		z-index: -1;
	}

	section {
		padding-top: 0rem;
		gap: 5rem;
	}
	h1 {
		font-size: 56px;
	}

	.container {
		padding: 5rem;
		border: 2px solid #9acc5b;
		box-shadow: 0px 0px 15px 20px #9acc5b;
		border-radius: 25px;
		display: flex;
		gap: 3rem;
		flex-direction: row;
	}
	@media screen and (max-width: 1200px) {
		.container {
			flex-direction: column;
		}
	}
</style>
