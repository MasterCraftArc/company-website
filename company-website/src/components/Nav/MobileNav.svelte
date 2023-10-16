<script>
	import defenseUnicornsLogo from '../../images/svg/doug.svg';
	import hamburger from '../../images/svg/hamburger.svg';

	let isMenuOpen = false;

	function toggleMenu(event) {
		event.stopPropagation();
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu(event) {
		if (isMenuOpen && !event.target.closest('.menu')) {
			isMenuOpen = false;
		}
	}

	function handleButtonClick(event) {
		event.preventDefault();
		toggleMenu(event);
	}
</script>

<svelte:document on:click={closeMenu} />
<nav>
	<div class="container">
		<a href="/" class="logo">
			<img class="logo" src={defenseUnicornsLogo} alt="logo" loading="lazy" /></a>


		<button on:click|stopPropagation={handleButtonClick} class="icon-button">
			<img src={hamburger} alt="hamburger" class="hamburger" loading="lazy" />
		</button>
	</div>

	{#if isMenuOpen}
		<div class="overlay" />
		<div class="menu">
			<div class="links">
				<a class="link" href="/Projects">Projects</a>
				<a class="link" href="/Contracts">Contracts</a>
				<a class="link" href="/CaseStudies">Case Studies</a>
				<a class="link" href="/SoftwareFactory">SoftwareFactory</a>
				<a class="link" href="/UnicornAcademy">Unicorn Academy</a>
				<a class="link" href="/AiForNationalSecurity">AI For National Security</a>
			</div>
		</div>
	{/if}
</nav>

<style>
		.logo:hover{
		width: 65px;
	}

	.logo {
		width: 60px;
		transition: all 0.3s ease-in-out;
	}
	.overlay {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.menu {
		background-color: #1a1b29;
		width: 50vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.links {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		position: relative;
	}

	.logo {
		width: 50px;
	}

	.hamburger {
		width: 30px;
		height: 30px;
	}

	.hamburger:hover {
		cursor: pointer;
	}

	.link {
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		padding: 1rem 1.5rem;
		color: white;
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
</style>
