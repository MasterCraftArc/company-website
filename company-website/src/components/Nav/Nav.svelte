<script>
	import defenseUnicornsLogo from '../../images/svg/doug.svg';
	import Button from '../Button.svelte';
	import Mobile from './MobileNav.svelte';
	import Dropdown from './Dropdown.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<Mobile />
{:else}
	<nav>
		<a href="/" class="logo">
		<img class="logo" src={defenseUnicornsLogo} alt="logo" loading="lazy" /></a>

		<div class="links">
			<Dropdown />
			<a class="link" href="/Projects">Open Source</a>
			<a class="link" href="/Contracts">Contracts</a>
			<a class="link" href="/CaseStudies">Case Studies</a>
			<a class="link" href="/UnicornAcademy">Unicorn Academy</a>
		</div>
		<Button link="/ContactUs" text="Request Demo" />
	</nav>
{/if}

<style>
	.logo:hover{
		width: 65px;
	}

	.logo {
		width: 60px;
		transition: all 0.3s ease-in-out;
	}


	nav {
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 5rem;
		z-index: 1;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.links {
		display: flex;
		padding-left: 8rem;
	}


	.link {
		padding: 0 .5rem;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		color: white;
		font-size: 22px;
		white-space: nowrap;
	}

	.link:hover {
		text-decoration: none;
		color: #ffd700;
	}

	.link::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: -4px;
		left: 0;
		background: linear-gradient(to right, #ffd700, #ffa500);
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out;
	}

	.link:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}

	@media only screen and (max-width: 1200px) {
		.logo {
			height: 3rem;
		}
	}
</style>
