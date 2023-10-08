<script>
	import defenseUnicornsLogo from '../../images/svg/defense-unicorns-logo.svg';
	import Button from '../Button.svelte';
	import MobileNav from './MobileNav.svelte';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileNav />
{:else}
	<nav>
		<img class="logo" src={defenseUnicornsLogo} alt="logo" loading="lazy" />
		<div class="links">
			<a href="/">Products</a>
			<a href="/">Projects</a>
			<a href="/">Contracts</a>
			<a href="/">Case Studies</a>
			<a href="/">Unicorn Academy</a>
			<Button link="/" text="Request Demo" />
		</div>
	</nav>
{/if}

<style>
	nav {
		overflow: hidden;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 4rem;
		z-index: 1;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.links {
		width: 75%;
		display: flex;
		justify-content: flex-end;
		padding-right: 0.75rem;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		padding: 0 1.5rem;
	}

	a:hover {
		text-decoration: none;
	}

	a::before {
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

	.logo {
		padding-left: 2rem;
		height: 72.29px;
		width: 338px;
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
