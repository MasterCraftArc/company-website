<script>
	import gsa from '../../images/svg/contract-imgs/gsa.svg';
	import sbsir from '../../images/svg/contract-imgs/sbir.svg';
	import sdvosb from '../../images/svg/contract-imgs/sdvosb.svg';
	import headerGlow from '../../images/svg/product-glows/zarf-header-glow.svg';
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
	<div class="img-holder">
		<img src={gsa} alt="" class="logo" loading="lazy" />
		<img src={sbsir} alt="logo" loading="lazy" />
		<img src={sdvosb} alt="logo" loading="lazy" />
	</div>
</section>

<style>
	.foreground {
		position: relative;
	}

	.h1-container {
		position: relative;
		display: inline-block;
	}

	section {
		padding-top: 5rem;
	}

	.glow {
		position: absolute;
		top: -15rem;
		left: -30rem;
		z-index: -1;
		width: 200%;
		height: auto;
	}
	.img-holder {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.logo {
		width: 200px;
		height: 200px;
	}
	section {
		gap: 7rem;
	}
	@media (max-width: 1200px) {
		.img-holder {
			flex-direction: column;
		}
		img {
			width: 100vw;
			max-width: 300px;
		}
		h1 {
			width: 100vw;
		}
	}
</style>
