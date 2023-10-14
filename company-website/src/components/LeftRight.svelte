<script>
</script>

<div class="container">
	<div class="left">
		<slot name="left" />
	</div>
	<div class="right">
		<slot name="right" />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5rem;
		width: 100%;
	}

	.left,
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.left {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1200px) {
		.container {
			flex-direction: column;
		}
	}
</style>
