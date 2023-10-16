<script>
	import Section5Text from './Section4TextBox.svelte';
	import Hero from '../../images/png/Hero.png';
	import Section5Cards from './ImgCards.svelte';
	import doug from '../../images/svg/doug.svg';
	import AI from '../../images/svg/ai-for-national-security/ai-for-national-security.svg'
	import security from '../../images/svg/software-factory/secure.svg'
	import office from '../../images/svg/software-factory/office.svg'
	import api from '../../images/svg/software-factory/api.svg'
	let currentImage = security;

	function handleSectionClick(event) {
		const targetId = event.detail.id;
		if (targetId === 'image1') {
			currentImage = security;
		} else if (targetId === 'image2') {
			currentImage = AI;
		} else if (targetId === 'image3') {
			currentImage = office;
		} else if (targetId === 'image4') {
			currentImage = api;
		}
	}

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<div class="mobile-cards">
		<div class="h1-container">
			<h1>What Defense</h1>
			<h1><span>Unicorns Offers</span></h1>
		</div>
		<Section5Cards
			title="Software Factory"
			text="As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
			img={Hero}
		/>
		<Section5Cards
			title="AI For National Security"
			text="As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
			img={Hero}
		/>
		<Section5Cards
			title="Your Mission App, Your Environment"
			text="As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
			img={Hero}
		/>
		<Section5Cards
			title="Discovery & Framing"
			text="As an extension of your business, have confidence that your clients receive the highest level of quality and simplicity construction management app."
			img={Hero}
		/>
	</div>
{:else}
	<section>
		<h1>What <span>Defense Unicorns</span> Offers</h1>
		<div class="container">
			<div class="left">
				<Section5Text
					on:hover={handleSectionClick}
					id="image1"
					title="Software Factory"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
				/>
				<Section5Text
					on:hover={handleSectionClick}
					id="image2"
					title="AI For National Security"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
				/>
				<Section5Text
					on:hover={handleSectionClick}
					id="image3"
					title="Your Mission App, Your Environment"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis, maxime laboriosam fugiat? Voluptatem, autem."
				/>
				<Section5Text
					on:hover={handleSectionClick}
					id="image4"
					title="Discovery & Framing"
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
	.mobile-cards {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	section {
		gap: 2rem;
		padding-bottom: 0rem;
	}

	.container {
		display: flex;
		gap: 2rem;
	}

	.left {
		min-width: 45vw;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}
	.right {
		min-width: 45vw;
		border-radius: 25px;
		border: 1px solid grey;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
