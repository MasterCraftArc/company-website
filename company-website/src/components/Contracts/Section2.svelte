<script>
	import ContractCards from './ContractCards.svelte';
	import Button from '../Button.svelte';
	import GSA from '../../images/svg/contract-imgs/gsa.svg';
	import MobileContractCards from '../Contracts/MobileContractCards.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileContractCards>
		<h1 slot="header">DoD Wide <span>GSA</span> IDIQ</h1>

		<div slot="left"><img src={GSA} alt="GSA" loading="lazy" class="img" /></div>
		<div slot="right">
			<p>
				Defense Unicorns has a DoD Wide IDIQ that can be leveraged as a sole source vehicle for any
				Defense Unicorn led capabilities or technology
			</p>
		</div>
		<Button slot="button" text="Contact Us" />
	</MobileContractCards>
{:else}
	<ContractCards>
		<h1 slot="header">DoD Wide <span>GSA</span> IDIQ</h1>

		<div slot="left"><img src={GSA} alt="GSA" loading="lazy" class="img" /></div>
		<div slot="right">
			<p>
				Defense Unicorns has a DoD Wide IDIQ that can be leveraged as a sole source vehicle for any
				Defense Unicorn led capabilities or technology
			</p>
		</div>
		<Button slot="button" text="Contact Us" />
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

	section{
		padding-bottom: 0;
	}

	.img {
		width: 100%;
	}
</style>
