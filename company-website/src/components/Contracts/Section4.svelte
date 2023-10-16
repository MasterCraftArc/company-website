<script>
	import ContractCards from './ContractCards.svelte';
	import Button from '../Button.svelte';
	import SDVOSB from '../../images/svg/contract-imgs/sdvosb.svg';
	import MobileContractCards from '../Contracts/MobileContractCards.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileContractCards>
		<h1 slot="header">DoD Wide <span>GSA</span> IDIQ</h1>
		<div slot="left">
			<img src={SDVOSB} alt="SDVOSB" loading="lazy" class="SDVOSB" />
		</div>
		<div slot="right">
			<p>Defense Unicorns is a service disabled veteran owned small business</p>
		</div>
		<Button slot="button" text="Contact Us" />
	</MobileContractCards>
{:else}
	<ContractCards>
		<h1 slot="header">Defense Unicorns is a <span>SDVOSB</span></h1>
		<div slot="left">
			<img src={SDVOSB} alt="SDVOSB" loading="lazy" class="SDVOSB" />
		</div>
		<div slot="right">
			<p>Defense Unicorns is a service disabled veteran owned small business</p>
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

	.SDVOSB {
		width: 100%;
	}
</style>
