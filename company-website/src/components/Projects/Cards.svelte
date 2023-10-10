<script>
	export let title = '';
	export let text = '';
</script>

<div class="card">
	<div class="img-container">
		<slot name="img1" />
	</div>
	<div class="text-container">
		<div class="title">
			<slot name="title">
				<h3>{title}</h3>
			</slot>
		</div>
		<div class="text">
			<slot name="text">
				<p>{text}</p>
			</slot>
		</div>
	</div>
</div>

<style>
	.text-container {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
	}

	.img-container {
		width: 100px;
		height: 100px;
	}

	.card {
		padding: 1.5rem;
		height: 400px;
		width: 300px;
		background-color: black;
		border: 2px solid white;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		cursor: pointer;
		transform: translateY(-10px);
		flex-direction: column;
		gap: 1rem;
	}

	.card:hover {
		box-shadow: 10px 0px 20px -5px #a5bdfc, -10px 0px 20px -5px #c547fa, 0px 10px 20px -5px #3f75fc;
	}
</style>
