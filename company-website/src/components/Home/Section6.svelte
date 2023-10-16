<script>
	import Button from '../Button.svelte';
</script>

<section>
	<div class="container">
		<div class="text-background">
			<div>
				<h1>
					Deploy your
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
		padding-bottom: 0;
	}

	.text-background {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		background: linear-gradient(to top, black, #1f202f);
		padding: 2rem;
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
		width: 100%;
	}

	@media (max-width: 1200px) {
		.text-background {
			padding: 3rem;
		}
		h1 {
			font-size: 36px;
		}
	}
</style>
