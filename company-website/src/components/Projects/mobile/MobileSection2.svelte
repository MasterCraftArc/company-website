<script>
	import LeftRight from '../../LeftRight.svelte';
	import zarf from '../../../images/svg/zarf.svg';
	import zarfPlatform from '../../../images/svg/zarf-platform.svg';
	import checkMark from '../../../images/svg/check-mark.svg';
	import Cards from '../Cards.svelte';
	import eclipse from '../../../images/svg/eclipse.svg';
	import folder from '../../../images/svg/zarf-card-imgs/folder.svg';
	import Imgs from '../img-orientation/imgs.svelte';
	import Button from '../../Button.svelte';
	import GithubButton from '../../GithubButton.svelte';
	import Star from '../../../images/svg/star.svg';
	import chip from '../../../images/svg/zarf-card-imgs/chip.svg';
	import server from '../../../images/svg/zarf-card-imgs/server.svg';
</script>

<section class="section2">
	<div>
		<LeftRight>
			<div slot="left" class="left">
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Package and deploy to airgap systems</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Consistently deploys the same capabilities for highly disributable systems</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Provides SBOM Support</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Works while connected too!</h3>
				</div>
			</div>
			<div slot="right" class="right">
				<img src={zarf} alt="zarf" loading="lazy" class="zarf" />
				<img src={zarfPlatform} alt="zarf-platform" loading="lazy" class="zarf-platform" />
			</div>
		</LeftRight>
	</div>

	<div>
		<div class="h1-container">
			<h1>Use <span>Zarf</span> To</h1>
		</div>
		<div class="cards">
			<div class="card">
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={folder} /></span>
					<span slot="title"><h3>Securely Package Apps and Resources</h3></span>
					<span slot="text"
						><p>
							Provides the ability to package a chunk of the internet and then securely deliver all
							of the files and dependencies needed to run an application in adisconnected
							environment.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={chip} /></span>
					<span slot="title"><h3>Deploy Cloud Apps While Disconnected</h3></span>
					<span slot="text"
						><p>
							Provides the ability to deploy apps declaratively and without internet connectivity.
							Opening up the door for modern cloud capabilities to be deployed in disconnected
							environments.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={server} /></span>
					<span slot="title"><h3>Easily Maintain Apps While Disconnected</h3></span>
					<span slot="text"
						><p>
							Zarf reduces the skill & resources needed to manage and update applications in
							disconnected environments, ensuring no down time or data loss when updating software.
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
		padding-bottom: 7rem;
	}

	.h1-container h1 {
		position: relative;
		z-index: 1;
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

	.zarf {
		width: 200px;
		height: 200px;
	}
	.zarf-platform {
		width: 200px;
		height: 200px;
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
