<script>
	import Button from '../Button.svelte';
</script>

<section>
	<div class="container">
		<div class="text-background">
			<div>
				<h1>
					Deploy you
					<span>Mission </span>Applications
				</h1>
				<h1>
					where your
					<span>Mission </span> Demands are
				</h1>
			</div>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente atque
				repellat a tempora incidunt dolorum eum officiis iusto nemo optio neque maiores nobis,
				maxime laboriosam fugiat? Voluptatem, autem.
			</p>

			<Button text="Request Demo" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.text-background {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		background: linear-gradient(to top, black, #1f202f);
		padding: 5rem;
		border-radius: 25px;

		box-shadow: 0 10px 80px -10px rgb(0, 119, 255), 0 -10px 80px -10px rgb(0, 231, 166);
		position: relative;
		z-index: 1;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		max-width: 100%; /* Set the maximum width to 100% */
		width: 100%; /* Add this line to ensure it takes full width within the section */
	}
</style>
