<script>
    import defenseUnicornsLogo from "../../images/svg/defense-unicorns-logo.svg";
    import Button from "../Button.svelte";
    import hamburger from "../../images/svg/hamburger.svg";

    let isMenuOpen = false;

    function toggleMenu(event) {
        event.stopPropagation();
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu(event) {
        if (isMenuOpen && !event.target.closest('.menu')) {
            isMenuOpen = false;
        }
    }
    
    function handleButtonClick(event) {
        event.preventDefault();
        toggleMenu(event);
    }
</script>

<svelte:document on:click={closeMenu}/>
<nav>
    <div class="container">
        <img class="logo" src={defenseUnicornsLogo} alt="logo" loading="lazy" />
        <button on:click|stopPropagation={handleButtonClick}>
            <img src="{hamburger}" alt="hamburger" class="hamburger" />
        </button>
    </div>

    {#if isMenuOpen}
    <div class="overlay"></div>
    <div class="menu">
        <div class="links">
            <a href="/">Products</a>
            <a href="/">Projects</a>
            <a href="/">Contracts</a>
            <a href="/">Case Studies</a>
            <a href="/">Unicorn Academy</a>
        </div>
    </div>
    {/if}
</nav>
<style>
    .overlay {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    button{
        background-color: transparent;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    button:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }

    .menu {

        background-color: #1A1B29;
        width: 50vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .links {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        position: relative;
    }

    .logo {
        width: 173px;
        height: 37px;
    }

    .hamburger:hover {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        padding: 1rem 1.5rem;
        color: white;
    }

    a:hover {
        text-decoration: none;
        color:#ffd700;
    }

    a::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -4px;
        left: 0;
        background: linear-gradient(to right, #ffd700, #ffa500);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }

    a:hover::before {
        visibility: visible;
        transform: scaleX(1);
    }
</style>
