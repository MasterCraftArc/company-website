<script>
	import Button from '../Button.svelte';
	import Hero from '../../images/png/Hero.png';
	import '@fontsource-variable/montserrat';

    $: innerWidth = 0
</script>
<svelte:window bind:innerWidth/>
  {#if innerWidth < 1200}
    <section class="section1">
        <div class="text-container-mobile">
        <h1>A Modern <span>Software Prime </span></h1>
        <Button link="/" text="Contact Us" />
        </div>
        <img src={Hero} alt="Hero" />
        <div class="text-container-mobile">
            <h1 class="mobile">Deploy Your</h1>
            <h1 class="mobile"><span>Mission Applications</span></h1>
            <h1 class="mobile">Where Your</h1>
            <h1 class="mobile"><span>Mission Demands</span></h1>
            <h1 class="mobile">Are</h1>
            <p>
                We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
                of mind with expert IT suppoort and services.
            </p>
            <Button link="/" text="Contact Us" />
        </div>
    </section>
  {:else}
<section class="section1">
	<div class="text-container">
		<h1>A Modern <span>Software Prime </span></h1>
		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
	</div>
	<img src={Hero} alt="Hero" />
	<div class="text-container">
		<h1>A Modern <span>Software Prime </span></h1>
		<p>
			We offer everythiong you need to eliminate IT challenges, grow your business, and have peace
			of mind with expert IT suppoort and services.
		</p>
		<Button link="/" text="Contact Us" />
	</div>
</section>
{/if}
<style>
    .mobile{
        font-size: 36px;
    }


	.text-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	section {
		padding: 10rem 0rem;
	}

	h1 {
		width: 500px;
	}
	img {
		width: 100%;
		object-fit: cover;
	}
</style>
