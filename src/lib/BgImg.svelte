<script>
    export let config = {}

    $: url = config.url || '/waves.gif'


    // if (config.url === undefined) {
    //     console.log('config.url is undefined')
    //     url = '/waves.gif'
    // }
    $: isFilter = config.filter === undefined
    $: filterClass = Number.isInteger(config.filter)  ? 'filter-' + config.filter : ''
    $: console.log('Url in BgImage changed', url)
</script>

<!--<img src="{config.url}" alt="test">-->
<div
        class="bgImg {filterClass}"
        class:filter="{isFilter}"
        style="{'--bgimg: url(' + url + ')'}"
></div>


<style>
    .filter {
        filter: blur(3px) brightness(2) grayscale(100%) sepia(100%) hue-rotate(240deg);
    }
    .filter-1 {
        filter: blur(3px) contrast(1.2) brightness(1) grayscale(100%) sepia(100%) hue-rotate(240deg);
    }
    .bgImg {
        image-rendering: pixelated;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-image: var(--bgimg);
        background-size: cover;

        z-index: -100;
    }
</style>
