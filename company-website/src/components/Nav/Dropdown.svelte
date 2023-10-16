<script>
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	document.addEventListener('click', function (event) {
		const dropdown = document.querySelector('.dropdown');
		if (dropdown && !dropdown.contains(event.target)) {
			isOpen = false;
		}
	});
</script>

<div
	class="dropdown {isOpen ? 'active' : ''}"
	role="button"
	on:click={toggleDropdown}
	on:keydown={toggleDropdown}
	tabindex=""
>
	<button aria-expanded={isOpen}>Products</button>
	<div class="dropdown-content" role="menu">
		<a href="/SoftwareFactory" role="menuitem">Software Factory</a>
		<a href="/AiForNationalSecurity" role="menuitem">AI For National Security</a>
	</div>
</div>

<style>
	.dropdown-content a {
		color: white;
		padding: 12px 16px;
		display: block;
		text-decoration: none;
		z-index: 3;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
		color: #ffd700;
	}

	.dropdown {
		z-index: 3;
		position: relative;
		display: inline-block;
	}

	button:hover {
		text-decoration: none;
		color: #ffd700;
		cursor: pointer;
	}

	button::before {
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

	button:hover::before {
		visibility: visible;
		transform: scaleX(1);
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
	a {
		padding: 0 1rem;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		color: white;
		font-size: 16px;
		white-space: nowrap;
	}
	a:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}

	button {
		font-size: 24px;
		background-color: transparent;
		color: white;
		border: none;
		font-family: 'montserrat';
	}

	.dropdown-content {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #1a1c29;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 3;
	}

	.dropdown.active .dropdown-content {
		display: block;
	}

	.dropdown-content a {
		color: white;

		padding: 12px 16px;
		display: block;
		text-decoration: none;
		z-index: 3;
	}

	.dropdown-content a:hover {
		background-color: #1a1c29;
	}
</style>
