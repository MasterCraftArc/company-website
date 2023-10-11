<script>
	import LeftRight from '../../LeftRight.svelte';
	import pepr from '../../../images/svg/pepr.svg';
	import peprPlatform from '../../../images/svg/pepr-platform.svg';
	import checkMark from '../../../images/svg/check-mark.svg';
	import Cards from '../Cards.svelte';
	import eclipse from '../../../images/svg/eclipse.svg';
	import Imgs from '../img-orientation/imgs.svelte';
	import CardGlow from '../../Home/CardGlow.svelte';
	import cardGlow from '../../../images/svg/product-glows/pepr-card-glow.svg';
	import Button from '../../Button.svelte';
	import GithubButton from '../../GithubButton.svelte';
	import Star from '../../../images/svg/star.svg';
	import connected from '../../../images/svg/pepr-card-imgs/connected.svg';
	import settings from '../../../images/svg/pepr-card-imgs/settings.svg';
	import gears from '../../../images/svg/pepr-card-imgs/gears.svg';
	import peprGlow from '../../../images/svg/product-glows/pepr-header-glow.svg';
	import Imgs2 from '../img-orientation/imgs2.svelte';
</script>

<section class="section4">
	<div>
		<div class="h1-container">
			<h1><span>Pepr</span> - Kubernetes Middleware for Systems Integration</h1>
		</div>
		<LeftRight>
			<div slot="left" class="left">
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Automatically integrate your COTS or GOTS application</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Reduce human in the loop IT Ops checklists</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>IT domain expertise as code so your mission system survives changeovers</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Makes systems of systems integration easy</h3>
				</div>
			</div>
			<div slot="right" class="right">
				<img src={pepr} alt="pepr" loading="lazy" class="pepr" />
				<img src={peprPlatform} alt="pepr-platform" loading="lazy" class="pepr-platform" />
			</div>
		</LeftRight>
	</div>

	<div>
		<div class="h1-container">
			<h1>Use <span>Pepr</span> To</h1>
		</div>
		<div class="cards">
			<div class="card">
				<Cards>
					<span slot="img1" class="eclipse"><Imgs2 background={eclipse} img={connected} /></span>
					<span slot="title"><h3>Create Robust Policy Engines</h3></span>
					<span slot="text"
						><p>
							Codify security policy into corrective Pepr modules that can identify and remediate
							risk through automatically enforcing K8s best practices.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={settings} /></span>
					<span slot="title"><h3>Seamlessly Connect Applications</h3></span>
					<span slot="text"
						><p>
							Automate the integration of mission capabilities into complex systems with Pepr
							modules that are reusable across multiple systems.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={gears} /></span>
					<span slot="title"><h3>Automate K8 Scripts</h3></span>
					<span slot="text"
						><p>
							Remove the need for human intervention when issues arise in the cluster or
							application, by using Pepr modules to remediate the event.
						</p></span
					>
				</Cards>
			</div>
			<div />
		</div>
		<div class="links">
			<div class="a-tag">
				<GithubButton />
				<a href="https://github.com/defenseunicorns" target="_blank">
					Docs <img src={Star} alt="" loading="lazy" class="star" /> Star us on Github</a
				>
			</div>
			<Button text="Join the community" />
		</div>
	</div>
</section>

<style>
	.h1-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.h1-container h1 {
		position: relative;
		z-index: 1;
	}

	h1 span {
		color: #d34768;
		text-shadow: 0 0 5px #d34768;
	}

	h1 {
		padding-bottom: 7rem;
	}

	section {
		gap: 10rem;
		padding-top: 0;
	}

	.card {
		display: flex;
		justify-content: space-evenly;
		width: 100vw;
	}

	section {
		padding-top: 0;
		gap: 10rem;
	}

	.text-div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.links {
		padding-top: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
	}

	a {
		text-decoration: none;
	}

	.star {
		height: 15px;
		width: 15px;
	}

	.a-tag {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem;
	}

	.a-tag:hover {
		border-radius: 25px;
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}

	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.pepr {
		width: 250px;
		height: 250px;
	}
	.pepr-platform {
		width: 250px;
		height: 250px;
		z-index: -1;
		margin-top: -2rem;
	}

	h3 {
		padding-top: 1rem;
	}

	.cards {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.check-mark {
		width: 30px;
		height: 30px;
	}

	@media (max-width: 1200px) {
		h3 {
			font-size: 24px;
		}

		.check-mark {
			width: 25px;
			height: 25px;
		}
		.card {
			flex-direction: column;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 3rem;
		}
	}
</style>
