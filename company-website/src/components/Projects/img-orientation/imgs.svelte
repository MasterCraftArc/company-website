<script>
	export let background;
	export let img;
</script>

<div class="img-container">
	<slot name="img1">
		<img src={background} alt="" class="image-background" loading="lazy" />
	</slot>
	<slot name="img2">
		<img src={img} alt="" class="image" loading="lazy" />
	</slot>
</div>

<style>
	.img-container {
		position: relative;
		height: 100px;
		width: 100px;
	}

	.image-background {
		width: 125px;
		height: 125px;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.image {
		width: 75px;
		height: 75px;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}
</style>
