<script>
	import Card from './Card.svelte';
	import CardGlow from '../Home/CardGlow.svelte';
	import yellowGlow from '../../images/svg/yellow-glow.svg';
	import blueGlow from '../../images/svg/blue-glow.svg';
</script>

<section class="section4">
	<div class="card-glow"><CardGlow glowLeft={yellowGlow} glowRight={blueGlow} /></div>
	<Card
		title="Rapid ATO"
		text="It all starts with a free 30 minute conversation to save your life and use our software so please do that."
		check1="ya buy our software"
		check2="please do that"
	/>
	<Card
		title="Deploy Anywhere"
		text="It all starts with a free 30 minute conversation to save your life and use our software so please do that."
		check1="ya buy our software"
		check2="please do that"
	/>
	<Card
		title="No Vendor Lock In"
		text="It all starts with a free 30 minute conversation to save your life and use our software so please do that."
		check1="ya buy our software"
		check2="please do that"
	/>
</section>

<style>
	.section4 {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		position: relative;
		padding-bottom: 0rem;
	}

	.card-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	@media (max-width: 1200px) {
		.section4 {
			flex-direction: column;
			gap: 3rem;
		}
	}
</style>
