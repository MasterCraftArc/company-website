<script>
	import doug from '../../images/svg/doug.svg';
	import github from '../../images/svg/github.svg';
	import linkden from '../../images/svg/linkden.svg';
	import twitter from '../../images/svg/twitter.svg';
	import rss from '../../images/svg/rss.svg';
	import blueGlow from '../../images/svg/section-3-glow.svg';
	import map from '../../images/svg/worldmap.svg';
</script>

<section>
	<img src={map} alt="" class="map" />
	<div class="section-container">
		<div class="section1">
			<img src={doug} alt="doug" loading="lazy" class="doug" />
			<div class="icons">
				<img src={github} alt="github icon" loading="lazy" class="icon" />
				<img src={linkden} alt="linkden icon" loading="lazy" class="icon" />
				<img src={twitter} alt="twitter icon" loading="lazy" class="icon" />
				<img src={rss} alt="rss icon" loading="lazy" class="icon" />
			</div>
		</div>
		<div class="section2">
			<a href="/">Products</a>
			<a href="/">Projects</a>
			<a href="/">Contracts</a>
			<a href="/">Case Studies</a>
			<a href="/">Unicorns Academy</a>
			<a href="/">Contact</a>
		</div>
		<div class="section3">
			<a href="/">Github</a>
			<a href="/">Blogs</a>
			<a href="/">Careers</a>
			<a href="/">Terms of Service</a>
			<a href="/">Privacy Policy</a>
		</div>
	</div>
	<p>Defense Unicorns, Inc</p>
	<img src={blueGlow} alt="" class="blue-glow" loading="lazy"/>
</section>

<style>
	.section-container {
		position: relative;
	}

	.icon {
		width: 35px;
        height: 35px;
	}

	.icon:hover {
		cursor: pointer;
	}

	.map {
		position: absolute;
		z-index: -1;
		overflow: hidden;
		width: 100vw;
	}

	.blue-glow {
		position: absolute;
		z-index: -1;
		overflow: hidden;
		width: 100vw;
	}

	.doug {
		width: 100px;
        height: 150px;
	}

	.icons {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
	}

	.section-container {
		display: flex;
		gap: 3rem;
	}

	.section2 {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.section3 {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.section1 {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 296px;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		padding: 0 1.5rem;
		color: #545454;
	}

	a:hover {
		color: #fff;
	}

	p {
		color: #545454;
		padding-top: 5rem;
	}
</style>
