<script>
	import LeftRight from '../../LeftRight.svelte';
	import checkMark from '../../../images/svg/check-mark.svg';
	import Cards from '../Cards.svelte';
	import eclipse from '../../../images/svg/eclipse.svg';
	import Imgs from '../img-orientation/imgs.svelte';
	import Button from '../../Button.svelte';
	import GithubButton from '../../GithubButton.svelte';
	import Star from '../../../images/svg/star.svg';
	import Leapfrog from '../../../images/svg/leapfrog.svg';
	import ai from '../../../images/svg/leapfrog-card-imgs/ai.svg';
	import computer from '../../../images/svg/leapfrog-card-imgs/computer.svg';
	import cube from '../../../images/svg/leapfrog-card-imgs/cube.svg';
</script>

<section class="section3">
	<div>
		<div class="h1-container">
			<h1><span>LeapfrogAI</span> - Generative AI for National Security</h1>
		</div>
		<LeftRight>
			<div slot="left" class="left">
				<img src={Leapfrog} alt="leapfrog" loading="lazy" class="leapfrog" />
			</div>
			<div slot="right" class="right">
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>ChatGPT type capabilties for secure, local, air gapped systems</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Generative AI leveraging your data</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Local deployments, not internet required</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Works on ships, tanks, planes, on-prem and in the cloud</h3>
				</div>
			</div>
		</LeftRight>
	</div>
	<div>
		<div class="h1-container">
			<h1>Use <span>LeapfrogAI</span> for</h1>
		</div>
		<div class="cards">
			<div class="card">
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={ai} /></span>
					<span slot="title"><h3>Generative AI for Airgapped Systems</h3></span>
					<span slot="text"
						><p>
							LeapfrogAI mirrors OpenAI and Hugging Face API surface so secure and disconnected
							enviroments can have a ChatGPT like experience while fully disconnected from the
							internet.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={computer} /></span>
					<span slot="title"><h3>Vector Databases & Embedding Creation</h3></span>
					<span slot="text"
						><p>
							LeapfrogAI has efficent similarity searches on large scale databases and generative
							embeddings which can be used for semantic similarity, clustering and more.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={cube} /></span>
					<span slot="title"><h3>Fine Tune Custom Models</h3></span>
					<span slot="text"
						><p>
							LeapfrogAI has the ability to l everage customer specific data to fine-tune models
							that enable the AI to better understand your domain and provide more accurate
							contextual outputs.
						</p></span
					>
				</Cards>
			</div>
		</div>
		<div />
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
		padding-bottom: 7rem;
	}

	h1 span {
		color: #9acc5b;
		text-shadow: 0 0 5px #9acc5b;
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

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}

	.left {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.leapfrog {
		width: 300px;
		height: 300px;
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
