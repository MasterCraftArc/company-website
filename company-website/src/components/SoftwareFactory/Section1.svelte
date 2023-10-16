<script>
import LeftRight from "../LeftRight.svelte";
import secure from  '../../images/svg/software-factory/secure.svg'

import Button from "../Button.svelte";
</script>

<section>
    <h1> <span>Software Factory</span> For National Security</h1>
    <div class="container">
        <LeftRight>
            <div slot="left" class="left">
                <div class="img-holder">
                <img src="{secure}" alt="secure" loading="lazy">
            </div>
            </div>
            <div slot="right" class="right">
                <p>A software factory solution designed
                    specifically for national security systems. A
                    common developer environment, designed
                    to accelerate ATOs, and deploy mission
                    capabilities to any environment.</p>
                    <Button text="Contact Us"/>
            </div>
        </LeftRight>
    </div>
</section>

<style>

    section{
        padding-top: 3rem;
        gap: 7rem;
    }

    .left,.right{
        width: 100%;
    }

    .right{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: left;
        gap: 3rem;
    }

    img{
        width: 100%;
    }
    .img-holder{
        display: flex;
        flex-direction: column;
    }
</style>
