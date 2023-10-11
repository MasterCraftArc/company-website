<script>
	import ContractCards from './ContractCards.svelte';
	import Button from '../Button.svelte';
	import spaceX from '../../images/svg/contract-imgs/spaceX.svg';
</script>

<ContractCards>
	<h1 slot="header"><span>SpaceX</span></h1>
	<div slot="left">
		<p>
			"Defense Unicorns helped us automate how we deliver software solutions to our government
			customers. They helped transform our labor intensive software security scanning process from a
			2 week effort, down to an automated process that takes just a couple minutes”
		</p>
	</div>
	<div slot="right">
		<img src={spaceX} alt="spaceX" loading="lazy" class="spaceX" />
	</div>
	<Button slot="button" text="Watch Case Study Videos" />
</ContractCards>

<style>
	p {
		color: #fff;
		text-align: center;
		font-size: 25px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.spaceX {
		width: 100%;
	}
</style>
