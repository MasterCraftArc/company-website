<script>
	import server from '../../images/svg/server.svg';
	import CardGlow from './CardGlow.svelte';
	import glow from '../../images/svg/section-3-glow.svg';
</script>

<section>
	<div class="card-glow"><CardGlow /></div>
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

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	img {
		width: 400px;
		height: auto;
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
</style>
