<script>
	import ContractCards from './ContractCards.svelte';
	import Button from '../Button.svelte';
</script>

<ContractCards>
	<h1 slot="header"><span>Department</span> of Air Force - Defensive Cyber</h1>
	<div slot="left">
		<p>
			“The cyber threats are incredibly real, and thanks to Defense Unicorns, our aggressive vision
			and timelines will be acheivable”
		</p>
	</div>
	<div slot="right" />
	<Button slot="button" text="Read Case Study" />
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
</style>
