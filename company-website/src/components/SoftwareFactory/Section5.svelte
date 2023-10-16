<script>
	import Button from "../Button.svelte";


</script>

<section>
<div class="card-container">
    <div class="card left-card">
        <div class="h1-container2">
        <h1>Free</h1>
    </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci quae sequi maxime at molestiae nihil veniam illum ut! Vero a ab numquam quo illo? Voluptatem ut similique aliquid illo!</p>
        <div class="list-items">
        <ul>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
        </ul>
    </div>
        <h3>$0/Month</h3>
        <Button text="Source Code"/>
    </div>
    <div class="card center-card">
        <div class="h1-container">
        <h1>Standard</h1>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci quae sequi maxime at molestiae nihil veniam illum ut! Vero a ab numquam quo illo? Voluptatem ut similique aliquid illo!</p>
        <div class="list-items">
        <ul>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
        </ul>
    </div>
        <h3>$1,000/Month</h3>
        <Button text="Contact Us"/>
    </div>
    <div class="card right-card">

    <div class="h1-container2">
        <h1>Premium</h1>
    </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci quae sequi maxime at molestiae nihil veniam illum ut! Vero a ab numquam quo illo? Voluptatem ut similique aliquid illo!</p>
        <div class="list-items">
        <ul>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
            <li>Lorem ipsum dolor sit felis</li>
        </ul>
    </div>

        <h3>Varies</h3>
        <Button text="Contact Us"/>

    </div>
</div>
</section>

<style>
p {
    padding: 1rem;
}

.h1-container {
    background-color: #a5bdfc;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.h1-container2 {
    background-color: #a5bdfc;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list-items {
    display: flex;
    gap: 3rem;
}

li {
    padding-top: 2rem;
}

.card ul li {
    color: white;
    font-family: 'montserrat';
}

.card-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    position: relative;
}

.left-card, .right-card {
    width: 400px;
    height: 800px;
}

.card {
    background-color: black;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 1000px;
    gap: 2rem;
    box-shadow: 0px 0px 20px 20px rgba(0, 12, 245, 0.3);
    padding-bottom: 1rem;
    position: relative;
    z-index: 1;
}

.left-card, .right-card {
    display: flex;
    justify-content: space-between;
}

.center-card {
    width: 600px;
    height: 1100px;
    transform: translateY(-10px);
    display: flex;
    justify-content: space-between;
}

</style>
