<script>
    export let config = {}


</script>

<!--<img src="{config.url}" alt="test">-->
<div class="bgImg" style="{'--bgimg: url(' + config.url + ')'}"></div>


<style>
    .bgImg {
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
