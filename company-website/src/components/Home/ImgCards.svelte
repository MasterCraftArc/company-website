<script>
	export let title;
	export let text;
	export let img;
</script>

<div class="card-holder">
	<div class="card">
		<div class="text-container-mobile">
			<h1 class="mobile">{title}</h1>
			<p>{text}</p>
		</div>
		<img src={img} alt="" />
	</div>
</div>

<style>
	.card {
		width: 350px;
		height: 550px;
		background-color: #1a1b29;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		border-radius: 25px;
	}
	.text-container-mobile {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	p {
		text-align: center;
		padding-top: 28px;
	}
	.card-holder {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		background-color: blue;
		width: 350px;
		height: 250px;
	}
</style>
