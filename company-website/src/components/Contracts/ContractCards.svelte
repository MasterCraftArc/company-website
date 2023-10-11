<script>
	import gsa from '../../images/svg/contract-imgs/gsa.svg';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h1><slot name="header" /></h1>
	<div class="container">
		<div class="left"><slot name="left" /></div>
		<div class="right"><slot name="right" /></div>
	</div>
	<slot name="button" />
</section>

<style>
	.container {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
	}

	section {
		gap: 5rem;
	}

	.left {
		display: flex;
		align-items: center;
		justify-content: center;
		color: red;
		width: 550px;
		height: 350px;
		border-radius: 25px;
		border: 1px grey solid;
	}
	.right {
		display: flex;
		align-items: center;
		justify-content: center;
		color: blue;
		width: 550px;
		height: 350px;
		border-radius: 25px;
		border: 1px grey solid;
	}

	@media (max-width: 1199px) {
		.container {
			flex-direction: column;
			gap: 3rem;
		}

		.left,
		.right {
			width: 350px;
		}
	}
</style>
