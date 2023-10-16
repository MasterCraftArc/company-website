<script>
    import LeftRight from "../LeftRight.svelte";
    import Cards from "../Projects/Cards.svelte";
    import Button from "../Button.svelte";
    import office from "../../images/svg/software-factory/office.svg"
    import leapFrog from '../../images/svg/leapfrog.svg'
    import eclipse from '../../images/svg/eclipse.svg';
    import Imgs from "../Projects/img-orientation/imgs.svelte";
    import pages from "../../images/svg/software-factory/pages.svg";
    import settings from "../../images/svg/software-factory/page-settings.svg";
    import cube from "../../images/svg/software-factory/cube.svg";
</script>

<section>
    <div class="text-box">
        <h1>What Can Software Factory Do For</h1>
        <h1>Your <span>Program Office</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, </p>
    </div>
    <div class="container">
        <LeftRight>
            <div slot="left" class="left">
                <div class="left-container">
                <div class="mini-text-box">
                <h3>Misson Value of Software Factory</h3>
                <p>A software factory solution designed
                    specifically for national security systems. A
                    common developer environment, designed
                    to accelerate ATOs, and deploy mission
                    capabilities to any environment.</p>
                </div>
                <div class="mini-text-box">
                    <h3>Misson Value of Software Factory</h3>
                <p>A software factory solution designed
                    specifically for national security systems. A
                    common developer environment, designed
                    to accelerate ATOs, and deploy mission
                    capabilities to any environment.</p>
                </div>
            </div>
            </div>
            <div slot="right" class="right">
                <div class="img-holder">
                    <img src="{office}" alt="office" loading="lazy">
                </div>
            </div>
        </LeftRight>
    </div>
    <div>
        <div class="h1-container">
            <h1 class="header">Use <span>Software Factory</span> for</h1>
        </div>
            <div class="cards">
                <Cards>
                    <span slot="img1" class="eclipse"><Imgs background={eclipse} img={pages} /></span>
                    <span slot="title"><h3>Securely Package Apps and Resources</h3></span>
                    <span slot="text"
                        ><p>
                            Provides the ability to package a chunk of the internet and then securely deliver
                            all of the files and dependencies needed to run an application in adisconnected
                            environment.
                        </p></span
                    >
                </Cards>
                <Cards>
                    <span slot="img1" class="eclipse"><Imgs background={eclipse} img={cube} /></span>
                    <span slot="title"><h3>Securely Package Apps and Resources</h3></span>
                    <span slot="text"
                        ><p>
                            Provides the ability to package a chunk of the internet and then securely deliver
                            all of the files and dependencies needed to run an application in adisconnected
                            environment.
                        </p></span
                    >
                </Cards>
                <Cards>
                    <span slot="img1" class="eclipse"><Imgs background={eclipse} img={settings} /></span>
                    <span slot="title"><h3>Securely Package Apps and Resources</h3></span>
                    <span slot="text"
                        ><p>
                            Provides the ability to package a chunk of the internet and then securely deliver
                            all of the files and dependencies needed to run an application in adisconnected
                            environment.
                        </p></span
                    >
                </Cards>
            </div>
</section>


    <style>
        .header{
            padding-bottom: 5rem;
        }


        .cards{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 3rem;
        }
        .left-container{
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        .mini-text-box{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
            gap: 2rem;
        }

        .text-box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }


        section{
            padding-top: 3rem;
            gap: 3rem;
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
            width: 500px;
        }
        .img-holder{
            display: flex;
            flex-direction: column;
        }
    </style>
