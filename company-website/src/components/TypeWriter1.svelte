<script>
	import Typewriter from 'svelte-typewriter';

	// Exported variables
	export let headings = [''];
	export let glowHeader = '';

	// Typewriter properties
	let typewriterProps = {
		mode: 'loopOnce',
		interval: 200,
		keepCursorOnFinish: 100,
	};
</script>

<Typewriter {...typewriterProps}>
	{#each headings as heading (heading)}
		{#if heading.includes(glowHeader)}
			{#if heading.indexOf(glowHeader) === 0}
				<h1><span class="glow">{glowHeader}</span>{heading.substring(glowHeader.length)}</h1>
			{:else}
				<h1>
					{heading.substr(0, heading.indexOf(glowHeader))}<span class="glow">{glowHeader}</span
					>{heading.substr(heading.indexOf(glowHeader) + glowHeader.length)}
				</h1>
			{/if}
		{:else}
			<h1>{heading}</h1>
		{/if}
	{/each}
</Typewriter>

<style>
	:root {
		--cursor-color: #a5bdfc;
	}

	.glow {
		animation: glow-animation 1.5s infinite alternate;
	}

	@keyframes glow-animation {
		0% {
			text-shadow: 0 0 10px #a5bdfc;
		}

		100% {
			text-shadow: 0 0 20px #a5bdfc;
		}
	}

	@media screen and (max-width: 1200px) {
		h1 {
			width: 350px;
			height: 100px;
		}
	}
</style>
