<script>
import ImgOrientation from '../Projects/img-orientation/imgs.svelte'
import eclipse from '../../images/svg/eclipse.svg';
import bullseye from '../../images/svg/careers/section-3-imgs/bullseye.svg'
</script>

<section>
    <h1>OUR CORE VALUES</h1>
    <h1>What Makes Unicorns Sparkle</h1>
    <div class="container">
        <div class="img-container">
        <ImgOrientation background={eclipse} img={bullseye} />
        <h2>We are <span>Focused</span></h2>
    </div>
    <div class="img-container">
        <ImgOrientation background={eclipse} img={bullseye} />
        <h2>We are <span>Focused</span></h2>
    </div>
    <div class="img-container">
        <ImgOrientation background={eclipse} img={bullseye} />
        <h2>We are <span>Focused</span></h2>
    </div>
    <div class="img-container">
        <ImgOrientation background={eclipse} img={bullseye} />
        <h2>We are <span>Focused</span></h2>
    </div>
    <div class="img-container">
        <ImgOrientation background={eclipse} img={bullseye} />
        <h2>We are <span>Focused</span></h2>
    </div>
    <div class="img-container">
        <ImgOrientation background={eclipse} img={bullseye} />
        <h2>We are <span>Focused</span></h2>
    </div>
    </div>
</section>

<style>
    .container{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
</style>
