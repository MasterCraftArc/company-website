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
		<img class="logo" src={defenseUnicornsLogo} alt="logo" loading="lazy" />
		<div class="links">
			<Dropdown />
			<a href="/Projects">Projects</a>
			<a href="/Contracts">Contracts</a>
			<a href="/CaseStudies">Case Studies</a>
			<a href="/UnicornAcademy">Unicorn Academy</a>
		</div>
		<Button link="/ContactUs" text="Request Demo" />
	</nav>
{/if}

<style>
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
		justify-content: center;
		align-items: center;
	}

	.logo {
		width: 60px;
	}

	a {
		padding: 0 1rem;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		color: white;
		font-size: 24px;
		white-space: nowrap;
	}

	a:hover {
		text-decoration: none;
		color: #ffd700;
	}

	a::before {
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

	a:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}

	@media only screen and (max-width: 1200px) {
		.logo {
			height: 3rem;
		}
	}
</style>
