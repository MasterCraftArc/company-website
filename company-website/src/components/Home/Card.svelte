<script>
	import Button from '../Button.svelte';
	export let title = '';
	export let text = '';
	export let check1 = '';
	export let check2 = '';
	import checkmark from '../../images/svg/check-mark.svg';
</script>

<div class="card">
	<slot>
		<div class="text-container">
			<h3>{title}</h3>
			<p>{text}</p>
			<div class="check-holder">
				<div class="checkmark">
					<img src={checkmark} alt="checkmark" loading="lazy" class="check" />
					<p>{check1}</p>
				</div>
				<div class="checkmark">
					<img src={checkmark} alt="checkmark" loading="lazy" class="check" />
					<p>{check2}</p>
				</div>
			</div>
			<Button text="Learn More" />
		</div>
	</slot>
</div>

<style>
	.check {
		width: 30px;
		height: 30px;
	}

	.checkmark {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.text-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		text-align: start;
		gap: 2rem;
	}

	.check-holder {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		padding:3rem 1.5rem;
		height: 300px;
		width: 300px;
		background-color: black;
		border: 2px solid white;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transform: translateY(-10px);
	}

	.card:hover {
		box-shadow: 10px 0px 20px -5px #a5bdfc, -10px 0px 20px -5px #c547fa, 0px 10px 20px -5px #3f75fc;
	}
</style>
