<script>
	import LeftRight from '../LeftRight.svelte';
	import zarf from '../../images/svg/zarf.svg';
	import zarfPlatform from '../../images/svg/zarf-platform.svg';
	import checkMark from '../../images/svg/check-mark.svg';
	import Cards from './Cards.svelte';
	import eclipse from '../../images/svg/eclipse.svg';
	import folder from '../../images/svg/zarf-card-imgs/folder.svg';
	import Imgs from './imgs.svelte';
	import CardGlow from '../Home/CardGlow.svelte';
	import redGlow from '../../images/svg/red-glow.svg';
	import blueGlow from '../../images/svg/blue-glow.svg';
	import Button from '../Button.svelte';
	import GithubButton from '../GithubButton.svelte';
	import Star from '../../images/svg/star.svg';
	import chip from '../../images/svg/zarf-card-imgs/chip.svg';
	import server from '../../images/svg/zarf-card-imgs/server.svg';
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
					<h3>Package and deploy to airgap systems</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Package and deploy to airgap systems</h3>
				</div>
				<div class="text-div">
					<img src={checkMark} alt="" loading="lazy" class="check-mark" />
					<h3>Package and deploy to airgap systems</h3>
				</div>
			</div>
			<div slot="right" class="right">
				<img src={zarf} alt="zarf" loading="lazy" class="zarf" />
				<img src={zarfPlatform} alt="zarf-platform" loading="lazy" class="zarf-platform" />
			</div>
		</LeftRight>
	</div>

	<div>
		<h1 class="card-header">Use <span>Zarf</span> To</h1>
		<div class="cards">
			<div class="card-glow"><CardGlow glowLeft={redGlow} glowRight={blueGlow} /></div>
			<div class="card">
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={folder} /></span>
					<span slot="title"><h3>hello</h3></span>
					<span slot="text"
						><p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque quaerat,
							quo, tempora ea quam autem placeat harum fuga quia nam enim, eligendi rem illum
							tempore! Neque nobis perspiciatis cupiditate.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={chip} /></span>
					<span slot="title"><h3>hello</h3></span>
					<span slot="text"
						><p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque quaerat,
							quo, tempora ea quam autem placeat harum fuga quia nam enim, eligendi rem illum
							tempore! Neque nobis perspiciatis cupiditate.
						</p></span
					>
				</Cards>
				<Cards>
					<span slot="img1" class="eclipse"><Imgs background={eclipse} img={server} /></span>
					<span slot="title"><h3>hello</h3></span>
					<span slot="text"
						><p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque quaerat,
							quo, tempora ea quam autem placeat harum fuga quia nam enim, eligendi rem illum
							tempore! Neque nobis perspiciatis cupiditate.
						</p></span
					>
				</Cards>
			</div>
			<div />
		</div>
		<div class="links">
			<Button text="Join the community" />
			<div class="a-tag">
				<GithubButton />
				<a href="https://github.com/defenseunicorns" target="_blank">
					Docs <img src={Star} alt="" loading="lazy" class="star" /> Star us on Github</a
				>
			</div>
		</div>
	</div>
</section>

<style>
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
		align-items: flex-end;
		gap: 1rem;
	}

	.links {
		padding-top: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
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

	.card-glow {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.left {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.zarf {
		width: 300px;
	}
	.zarf-platform {
		width: 300px;
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

	.card-header {
		text-align: center;
		padding-bottom: 113px;
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
	}
</style>
