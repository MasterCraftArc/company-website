<script>
	import Section5Text from './Section5Text.svelte';
	import Hero from '../../images/png/Hero.png';
	import blueGlow from '../../images/svg/blue-glow.svg';
	let currentImage = Hero;

	function handleSectionClick(event) {
		const targetId = event.detail.id;
		// Logic to determine which image corresponds to the clicked section
		// For example:
		if (targetId === 'image1') {
			currentImage = blueGlow;
		} else if (targetId === 'image2') {
			currentImage = Hero;
		} else if (targetId === 'image3') {
			currentImage = Hero;
		} else if (targetId === 'image4') {
			currentImage = Hero;
		}
	}
</script>

<section>
	<h1>What <span>Defense Unicorns</span> Offers</h1>
	<div class="container">
		<div class="left">
			<Section5Text
				on:click={handleSectionClick}
				id="image1"
				title="hello my friend"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
			/>
			<Section5Text
				on:click={handleSectionClick}
				id="image2"
				title="hello my friend"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
			/>
			<Section5Text
				on:click={handleSectionClick}
				id="image3"
				title="hello my friend"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
			/>
			<Section5Text
				on:click={handleSectionClick}
				id="image4"
				title="hello my friend"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
			/>
		</div>
		<div class="right">
			<img src={currentImage} alt="current" loading="lazy"/>
		</div>
	</div>
</section>

<style>
	section {
		gap: 2rem;
	}

	.container {
		display: flex;
		gap: 2rem;
	}

	.left {
		width: 50%;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}
	.right {
		width: 50%;
	}

	img {
		width: 100%;
	}
</style>
