<script>
	import server from '../../images/svg/server.svg';
	import CardGlow from './CardGlow.svelte';
	import glow from '../../images/svg/section-3-glow.svg';
	import yellowGlow from '../../images/svg/yellow-glow.svg'
	import blueGlow from '../../images/svg/blue-glow.svg'
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<section>
		<div class="container">
			<div class="h1-container">
				<h1>Our <span>Mission</span></h1>
			</div>
			<p>
				Transform how the U.S. defense apparatus buys,builds,delivers,and sustains mission
				capabilities
			</p>
			<img src={server} alt="server" loading="lazy" />
		</div>
	</section>
{:else}
	<section>
		<div class="card-glow"><CardGlow glowLeft={yellowGlow} glowRight={blueGlow}/></div>
		<div class="container">
			<div class="h1-container">
				<img src={glow} alt="" loading="lazy" class="header" />
				<h1>Our <span>Mission</span></h1>
			</div>
			<p>
				Transform how the U.S. defense apparatus buys,builds,delivers,and sustains mission
				capabilities
			</p>
			<img src={server} alt="server" loading="lazy" />
		</div>
	</section>
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	img {
		width: 400px;
		height: 500px;
	}

	section {
		position: relative;
		background-image: url('../../images/svg/waves.svg');
		background-size: cover;
		background-position: center;
	}

	.container {
		z-index: 1;
	}

	.card-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.header {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	@media (max-width: 1200px) {
		section {
			background-image: none;
		}

		h1 {
			font-size: 36px;
		}
	}
</style>
