<script>
	import Section5Text from './Section5Text.svelte';
	import Hero from '../../images/png/Hero.png';
	import blueGlow from '../../images/svg/blue-glow.svg';
	import Section5Cards from './Section5Cards.svelte';
	let currentImage = Hero;

	function handleSectionClick(event) {
		const targetId = event.detail.id;
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

	$: innerWidth = 0
</script>
<svelte:window bind:innerWidth/>
{#if innerWidth < 1200}
<div class="mobile-cards">
<Section5Cards
title="Software Factory"
text = "As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
img = {Hero}
/>
<Section5Cards
title="Software Factory"
text = "As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
img = {Hero}
/>
<Section5Cards
title="Software Factory"
text = "As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
img = {Hero}
/>
<Section5Cards
title="Software Factory"
text = "As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
img = {Hero}
/>
</div>
{:else}
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
			<img src={currentImage} alt="current" loading="lazy" />
		</div>
	</div>
</section>
{/if}
<style>

	.mobile-cards{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

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
