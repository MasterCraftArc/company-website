<script>
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
	.left,
	.right {
		background-color: black;
		padding: 2rem;
	}

	.container {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
	}

	section {
		gap: 5rem;
		padding-top: 2rem;
	}

	.left {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 550px;
		height: 350px;
		border-radius: 25px;
		border: 1px grey solid;
	}
	.right {
		display: flex;
		align-items: center;
		justify-content: center;
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

	@media (max-width: 400px) {
		.left,
		.right {
			width: 300px;
		}
	}
</style>
