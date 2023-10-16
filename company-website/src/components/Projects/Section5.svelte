<script>
	import LeftRight from '../LeftRight.svelte';
	import checkMark from '../../images/svg/check-mark.svg';
	import Cards from './Cards.svelte';
	import eclipse from '../../images/svg/eclipse.svg';
	import Imgs from './img-orientation/imgs.svelte';
	import CardGlow from '../Home/CardGlow.svelte';
	import blueGlow from '../../images/svg/product-glows/lula-card-glow.svg';
	import Button from '../Button.svelte';
	import GithubButton from '../GithubButton.svelte';
	import Star from '../../images/svg/star.svg';
	import lula from '../../images/svg/lula.svg';
	import lulaPlatform from '../../images/svg/lula-platform.svg';
	import card1 from '../../images/svg/lula-card-imgs/card1.svg';
	import card2 from '../../images/svg/lula-card-imgs/card2.svg';
	import card3 from '../../images/svg/lula-card-imgs/card3.svg';
	import lulaGlow from '../../images/svg/product-glows/lula-header-glow.svg';
	import Imgs2 from './img-orientation/imgs2.svelte';
	import Imgs3 from './img-orientation/imgs3.svelte';
	import Imgs4 from './img-orientation/imgs4.svelte';
	import MobileSection5 from './mobile/MobileSection5.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileSection5 />
{:else}
	<section class="section3">
		<div>
			<div class="h1-container">
				<img src={lulaGlow} alt="header-glow" loading="lazy" class="glow" />
				<h1><span>Lula</span> - Kubernetes Compliance Engine</h1>
			</div>
			<LeftRight>
				<div slot="left" class="left">
					<img src={lula} alt="lula" loading="lazy" class="lula" />
					<img src={lulaPlatform} alt="lula-platform" loading="lazy" class="lula-platform" />
				</div>
				<div slot="right" class="right">
					<div class="text-div">
						<img src={checkMark} alt="" loading="lazy" class="check-mark" />
						<h3>Turn your configuration into NIST control verification</h3>
					</div>
					<div class="text-div">
						<img src={checkMark} alt="" loading="lazy" class="check-mark" />
						<h3>Automate SCA and AO enforcement</h3>
					</div>
					<div class="text-div">
						<img src={checkMark} alt="" loading="lazy" class="check-mark" />
						<h3>Accelerate your ATO timelines</h3>
					</div>
					<div class="text-div">
						<img src={checkMark} alt="" loading="lazy" class="check-mark" />
						<h3>Turn compliance as spreadsheet into Compliance as code</h3>
					</div>
				</div>
			</LeftRight>
		</div>
		<div>
			<div class="h1-container">
				<img src={lulaGlow} alt="header-glow" loading="lazy" class="glow" />
				<h1>Use <span> Lula</span> for</h1>
			</div>
			<div class="cards">
				<div class="card-glow"><CardGlow glowLeft={blueGlow} glowRight={blueGlow} /></div>
				<div class="card">
					<Cards>
						<span slot="img1" class="eclipse"><Imgs3 background={eclipse} img={card1} /></span>
						<span slot="title"><h3>generate controls from config</h3></span>
						<span slot="text"
							><p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque quaerat,
								quo, tempora ea quam autem placeat harum fuga quia nam enim, eligendi rem illum
								tempore! Neque nobis perspiciatis cupiditate.
							</p></span
						>
					</Cards>
					<Cards>
						<span slot="img1" class="eclipse"><Imgs2 background={eclipse} img={card2} /></span>
						<span slot="title"><h3>Validate Controls in runtime</h3></span>
						<span slot="text"
							><p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque quaerat,
								quo, tempora ea quam autem placeat harum fuga quia nam enim, eligendi rem illum
								tempore! Neque nobis perspiciatis cupiditate.
							</p></span
						>
					</Cards>
					<Cards>
						<span slot="img1" class="eclipse"><Imgs4 background={eclipse} img={card3} /></span>
						<span slot="title"><h3>Automate Your ATOs</h3></span>
						<span slot="text"
							><p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque quaerat,
								quo, tempora ea quam autem placeat harum fuga quia nam enim, eligendi rem illum
								tempore! Neque nobis perspiciatis cupiditate.
							</p></span
						>
					</Cards>
				</div>
			</div>
			<div />
			<div class="links">
				<div class="a-tag">
					<a href="https://github.com/defenseunicorns/lula" target="_blank">
						Docs <img src={Star} alt="" loading="lazy" class="star" /> Star us on Github</a
					>
				</div>
				<Button text="Join the community" />
			</div>
		</div>
	</section>
{/if}

<style>


h3{
	text-align: left;
}
	.h1-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.glow {
		position: absolute;
		z-index: -1;
	}

	.h1-container h1 {
		position: relative;
		z-index: 1;
	}
	h1 span {
		color: #61afb1;
		text-shadow: 0 0 5px #61afb1;
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
		padding: 1rem;
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
	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 45vw;
		gap: 2rem;
	}

	.left {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.lula {
		width: 250px;
		height: 250px;
	}

	.lula-platform {
		width: 300px;
		height: auto;
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
