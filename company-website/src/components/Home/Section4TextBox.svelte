<script>
	import { createEventDispatcher } from 'svelte';

	export let title;
	export let text;
	export let id;

	const dispatch = createEventDispatcher();

	function handleHover() {
		dispatch('hover', { id });
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter' || event.key === 'Space') {
			dispatch('hover', { id });
		}
	}
</script>

<div
	on:mouseover={handleHover}
	on:focus={handleHover}
	on:keydown={handleKeyPress}
	tabindex="0"
	role="button"
	class="text-box"
	style="cursor: pointer;"
>
	{id}
	<h3>{title}</h3>
	<p>{text}</p>
</div>

<style>
	.text-box {
		border-radius: 25px;
		text-align: start;
		padding: 0.5rem;
		border: solid 1px grey;
		cursor: pointer;
	}

	div:hover,
	div:focus {
		box-shadow: 0 0 10px 5px #3498db;
		background-color: #292a3c;
		border: none;
		cursor: pointer;
	}

	h3,
	p {
		padding: 0.5rem;
	}
</style>
