<script>
	import LeftRight from '../LeftRight.svelte';
	import ai from '../../images/svg//ai-for-national-security/ai-for-national-security.svg';
	import Button from '../../components/Button.svelte';
	import CardGlow from '../Home/CardGlow.svelte';
	import headerGlow from '../../images/svg/product-glows/zarf-header-glow.svg'
	import blueGlow from '../../images/svg/product-glows/zarf-card-glow.svg'
</script>

<section>
	<div>
		<div class="foreground">
			<div class="h1-container">
				<img src={headerGlow} alt="header-glow" loading="lazy" class="glow" />
				<h1>Defense Unicorns Has A Number of</h1>
				<h1><span>Sole Source Options</span> Available</h1>
			</div>
		</div>
	</div>
	<LeftRight>
		<div slot="left">
			<img src={ai} alt="" />
		</div>
		<div slot="right">
			<div class="right">
				<h3>Chat-gpt like experience for Defense systems</h3>
				<h3>Your data, your environment, your mission</h3>
				<Button text="Get Early Access" />
			</div>
		</div>
	</LeftRight>
	<div class="card-glow"><CardGlow glowLeft={blueGlow} glowRight={blueGlow} /></div>
</section>

<style>
	.foreground {
		position: relative;
	}

	.h1-container {
		position: relative;
		display: inline-block;
	}

	.glow {
		position: absolute;
		top: -10rem;
		left: -20rem;
		z-index: -1;
	}

	.card-glow {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.right {
		display: flex;
		text-align: start;
		gap: 5rem;
		flex-direction: column;
	}

	section {
		padding-top: 5rem;
		gap: 5rem;
	}
</style>
