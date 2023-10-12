<script>
	import ContractCards from '../Contracts/ContractCards.svelte';
	import Button from '../Button.svelte';
	import PlatformOne from '../../images/svg/contract-imgs/platform-one.svg';
	import MobileContractCards from '../Contracts/MobileContractCards.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1200}
	<MobileContractCards>
		<h1 slot="header"><span>Department</span> of Air Force - Defensive Cyber</h1>
		<div slot="left">
			<img src={PlatformOne} alt="" />
		</div>
		<div slot="right">
			<p>
				"We had a tight mission timeline where our current developer environment was going to get
				shut down in a matter of a couple months. Defense Unicorn’s software factory solution got
				our team stood up and running in IL-5 incredibly fast. We have dozens of teams working from
				this environment daily.”
			</p>
		</div>
		<Button slot="button" text="Read Case Study" />
	</MobileContractCards>
{:else}
	<ContractCards>
		<h1 slot="header"><span>Department</span> of Air Force - Defensive Cyber</h1>
		<div slot="left">
			<img src={PlatformOne} alt="" />
		</div>
		<div slot="right">
			<p>
				"We had a tight mission timeline where our current developer environment was going to get
				shut down in a matter of a couple months. Defense Unicorn’s software factory solution got
				our team stood up and running in IL-5 incredibly fast. We have dozens of teams working from
				this environment daily.”
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
