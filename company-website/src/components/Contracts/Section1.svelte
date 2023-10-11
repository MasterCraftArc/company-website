<script>
	import gsa from '../../images/svg/contract-imgs/gsa.svg';
	import sbsir from '../../images/svg/contract-imgs/sbir.svg';
	import sdvosb from '../../images/svg/contract-imgs/sdvosb.svg';
</script>

<section>
	<div>
		<h1>Defense Unicorns Has A Number of</h1>
		<h1><span>Sole Source Options</span> Available</h1>
	</div>
	<div class="img-holder">
		<img src={gsa} alt="" class="logo" loading="lazy" />
		<img src={sbsir} alt="logo" loading="lazy" />
		<img src={sdvosb} alt="logo" loading="lazy" />
	</div>
</section>

<style>
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
</style>
