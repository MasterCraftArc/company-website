<script>
	import doug from '../../images/svg/doug.svg';
	import GithubButton from '../GithubButton.svelte';
	import LinkedinButton from '../LinkedinButton.svelte';
	import Twitter from '../Twitter.svelte';
	import Spotify from '../Spotify.svelte';
</script>

<section>
	<div class="section-container">
		<div class="section1">
			<img src={doug} alt="doug" loading="lazy" class="doug" />
		</div>
		<div class="mobile-section1">
			<a href="/">Products</a>
			<a href="/Projects">Projects</a>
			<a href="/Contracts">Contracts</a>
			<a href="/CaseStudies">Case Studies</a>
			<a href="/UnicornAcademy">Unicorns Academy</a>
			<a href="/ContactUs">Contact</a>
			<a target="_blank" href="https://github.com/defenseunicorns">Github</a>
			<a href="/">Blogs</a>
			<a href="/Careers">Careers</a>
			<a href="/TermsOfService">Terms of Service</a>
			<a href="/PrivacyPolicy">Privacy Policy</a>
		</div>
		<div class="section3">
			<GithubButton />
			<LinkedinButton />
			<Twitter />
			<Spotify />
		</div>
	</div>
	<p>Defense Unicorns, Inc</p>
</section>

<style>
	section {
		padding: 0;
	}

	.mobile-section1 {
		padding: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}

	.section3 {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		padding: 0;
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
		padding: 2rem 0rem;
	}
</style>
