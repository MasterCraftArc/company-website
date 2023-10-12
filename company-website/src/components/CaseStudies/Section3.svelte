<script>
	import ContractCards from '../Contracts/ContractCards.svelte';
	import Button from '../Button.svelte';
	import airForce from '../../images/svg/contract-imgs/air-force.svg';
	import MobileContractCards from '../Contracts/MobileContractCards.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileContractCards>
		<h1 slot="header"><span>Department</span> of Air Force - Defensive Cyber</h1>
		<div slot="left">
			<p>
				“The cyber threats are incredibly real, and thanks to Defense Unicorns, our aggressive
				vision and timelines will be acheivable”
			</p>
		</div>
		<div slot="right">
			<img src={airForce} alt="" />
		</div>
		<Button slot="button" text="Read Case Study" />
	</MobileContractCards>
{:else}
	<ContractCards>
		<h1 slot="header"><span>Department</span> of Air Force - Defensive Cyber</h1>
		<div slot="left">
			<p>
				“The cyber threats are incredibly real, and thanks to Defense Unicorns, our aggressive
				vision and timelines will be acheivable”
			</p>
		</div>
		<div slot="right">
			<img src={airForce} alt="" />
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
	img {
		width: 100%;
		height: 300px;
	}
	@media (max-width: 400px) {
		p {
			font-size: 20px;
		}
	}
</style>
