<script>
	import Typewriter from 'svelte-typewriter';

	export let headings = [''];
	export let glowHeader = '';

    let typewriterProps = {
        mode: 'scramble',
        interval: 200,
        scrambleDuration: 3000,
        scrambleSlowdown: true,
    }

    let isVisible = false;

    let observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.disconnect();
                }
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    let target;

    function startObserver() {
        target = document.querySelector('.container');
        if (target) {
            observer.observe(target);
        }
    }

    $: {
        if (!isVisible) {
            startObserver();
        }
    }

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
			min-height: 100px;
		}
	}
</style>
