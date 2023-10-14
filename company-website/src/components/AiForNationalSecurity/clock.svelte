<script>
    import background from '../../images/svg/clock/background.svg'
    import line from '../../images/svg/clock/Line.svg'

    export let number
</script>

<style>
    .box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .line {
        position: relative;
    }

    .seven {
        display: block;
        position: absolute;
        top: 0;
        left: 90px;
        transform: translate(-50%, -50%);
        padding-left: 55px;
        z-index: 1;
    }

    .mini-line {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .background {
        z-index: 0;
    }
</style>

<div class="box">
    <div class="line">
        <img src="{number}" alt="" class="seven">
        <img class="mini-line" src="{line}" alt="" loading="lazy">
    </div>
    <img class="background" src="{background}" alt="" loading="lazy">
</div>
