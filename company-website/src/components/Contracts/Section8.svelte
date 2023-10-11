<script>
	import ContractCards from './ContractCards.svelte';
	import Button from '../Button.svelte';
	import spaceForce from '../../images/svg/contract-imgs/space-force.svg';
</script>

<ContractCards>
	<h1 slot="header"><span>Space</span> Force Launch</h1>
	<div slot="left">
		<img src={spaceForce} alt="spaceForce" loading="lazy" class="spaceForce" />
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

	.spaceForce {
		width: 100%;
		height: 300px;
	}
</style>
