<script>
	import doug from '../../images/svg/doug.svg';
	import blueGlow from '../../images/svg/section-3-glow.svg';
	import map from '../../images/svg/worldmap.svg';
	import MobileFooter from './MobileFooter.svelte';
	import GithubButton from '../GithubButton.svelte';
	import LinkedinButton from '../LinkedinButton.svelte';
	import Twitter from '../Twitter.svelte';
	import Spotify from '../Spotify.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileFooter />
{:else}
	<section>
		<img src={map} alt="" class="map" />
		<div class="section-container">
			<div class="section1">
				<img src={doug} alt="doug" loading="lazy" class="doug" />
				<div class="icons">
					<GithubButton />
					<LinkedinButton />
					<Twitter />
					<Spotify />
				</div>
			</div>
			<div class="section2">
				<a href="/">Products</a>
				<a href="/Projects">Projects</a>
				<a href="/Contracts">Contracts</a>
				<a href="/CaseStudies">Case Studies</a>
				<a href="/UnicornAcademy">Unicorn Academy</a>
				<a href="/">Contact</a>
			</div>
			<div class="section3">
				<a href="/">Github</a>
				<a href="/">Blogs</a>
				<a href="/">Careers</a>
				<a href="/">Terms of Service</a>
				<a href="/PrivacyPolicy">Privacy Policy</a>
			</div>
		</div>
		<p>Defense Unicorns, Inc</p>
		<img src={blueGlow} alt="" class="blue-glow" loading="lazy" />
	</section>
{/if}

<style>
	.section-container {
		position: relative;
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
		color: white;
	}

	a:hover {
		color: #ffd700;
	}

	p {
		color: white;
		padding-top: 5rem;
	}
</style>
