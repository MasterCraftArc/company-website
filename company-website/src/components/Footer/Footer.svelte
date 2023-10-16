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
				<a href="/" class="logo">
					<img class="logo" src={doug} alt="logo" loading="lazy" /></a>
				<div class="icons">
					<GithubButton />
					<LinkedinButton />
					<Twitter />
					<Spotify />
				</div>
			</div>
			<div class="section2">
				<a class="link" href="/">Products</a>
				<a class="link" href="/Projects">Projects</a>
				<a class="link" href="/Contracts">Contracts</a>
				<a class="link" href="/CaseStudies">Case Studies</a>
				<a class="link" href="/UnicornAcademy">Unicorn Academy</a>
				<a class="link" href="/ContactUs">Contact</a>
			</div>
			<div class="section3">
				<a class="link" href="/">Github</a>
				<a class="link" href="/">Blogs</a>
				<a class="link" href="/Careers">Careers</a>
				<a class="link" href="/TermsOfService">Terms of Service</a>
				<a class="link" href="/PrivacyPolicy">Privacy Policy</a>
			</div>
		</div>
		<p>Defense Unicorns, Inc</p>
		<img src={blueGlow} alt="" class="blue-glow" loading="lazy" />
	</section>
{/if}

<style>
	.logo:hover{
		width: 120px;
	}

	.logo {
		width: 110px;
		transition: all 0.3s ease-in-out;
	}


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
		align-items: flex-start;
		gap: 2rem;
		width: 296px;
	}

	.link {
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		padding: 0 1.5rem;
		color: white;
	}

	.link:hover {
		color: #ffd700;
	}

	p {
		color: white;
		padding-top: 5rem;
	}
</style>
