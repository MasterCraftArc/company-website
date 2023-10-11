<script>
	import ContractCards from './ContractCards.svelte';
	import Button from '../Button.svelte';
	import cyberCommand from '../../images/svg/contract-imgs/cyber-command.svg';
</script>

<ContractCards>
	<h1 slot="header"><span>US Cyber </span>Command</h1>
	<div slot="left">
		<img src={cyberCommand} alt="cyberCommand" class="cyberCommand" loading="lazy" />
	</div>
	<div slot="right">
		<p>
			“We get our initial AI deployment done in a matter of a few weeks. We could never have moved
			that fast without Defense Unicorns”
		</p>
	</div>
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

	.cyberCommand {
		width: 100%;
		height: 300px;
	}
</style>
