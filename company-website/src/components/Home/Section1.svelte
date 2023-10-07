<script>
    import Button from "../Button.svelte";
    import Hero from "../../images/png/Hero.png"
    import '@fontsource-variable/montserrat'
</script>

<section class="section1">
    <div class="text-container">
    <h1>A Modern <span>Software Prime </span></h1>
    <p>We offer everythiong you need to eliminate IT challenges, grow your business, and have peace of mind with expert IT suppoort and services.</p>
    <Button link="/" text="Contact Us"/>
    </div>
    <img src="{Hero}" alt="Hero">
    <div class="text-container">
    <h1>A Modern <span>Software Prime </span></h1>
    <p>We offer everythiong you need to eliminate IT challenges, grow your business, and have peace of mind with expert IT suppoort and services.</p>
    <Button link="/" text="Contact Us"/>
    </div>
</section>

<style>
.text-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
}

section{
    padding: 10rem 0rem;
}

h1{
    font-family: "montserrat";
}
img{
    width: 100%;
    object-fit: cover;
}
</style>
