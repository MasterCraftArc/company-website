<script>
	import ContractCards from '../Contracts/ContractCards.svelte';
	import Button from '../Button.svelte';
	import cyberCommand from '../../images/svg/contract-imgs/cyber-command.svg';
	import MobileContractCards from '../Contracts/MobileContractCards.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileContractCards>
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
	</MobileContractCards>
{:else}
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
{/if}

<style>
	p {
		color: #fff;
		text-align: center;
		font-size: 25px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
	@media (max-width: 400px) {
		p {
			font-size: 20px;
		}
	}

	.cyberCommand {
		width: 100%;
		height: 300px;
	}
</style>
