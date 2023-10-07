<script>
	export let link = '';
	export let text = '';
</script>

<a target="_blank" href={link}>
	<button>{text}</button>
</a>

<style>
	a {
		text-decoration: none;
	}

	button {
		padding: 15px 40px;
		background: transparent;
		border: 2px solid white;
		color: white;
		font-family: helvetica;
		font-size: 16px;
		background: 0.5s ease;
		background-color: transparent;
		position: relative;
		transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
		cursor: pointer;
		display: block;
		border-radius: 50px;
		white-space: nowrap;
		box-shadow: 0 0 20px 5px rgba(165, 189, 252, 0.3);
	}

	button::after,
	button::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0px;
		transform: translateY(-50%);
		opacity: 0;
		transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	button::after {
		width: 15px;
		height: 1px;
		background: white;
		transform: translateX(-1.5px);
		margin-top: 0px;
	}

	button::before {
		content: '';
		transform: rotate(-135deg) translateX(40%);
		width: 5.5px;
		height: 5.5px;
		background: transparent;
		border-left: 1px solid white;
		border-bottom: 1px solid white;
		margin-top: -1px;
	}

	button:hover {
		padding: 15px 60px 15px 20px;
		background: linear-gradient(to right, #0d1a64, #a5bdfc);
		color: white;
	}

	button:hover::after,
	button:hover::before {
		opacity: 1;
		right: 15px;
	}
</style>
