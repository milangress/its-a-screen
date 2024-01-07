<script>
    export let config = {}


</script>

<div>
<p class="{config.class}">{@html config.content}</p>
</div>


<style>
    .superBig {
        font-size: 5rem;
    }
    .big {
        font-size: 2em;
    }
    div {
        /*position: absolute;*/
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    p {
        color: purple;
        font-size: 1.3rem;
        font-family: 'Self Modern',sans-serif;
        text-shadow: #fff 0 0 1px, #fff 0 0 2px, #fff 0 0 10px, #fff 0 0 20px, #fff 0 0 20px, #fff 0 0 30px, #fff 0 0 30px;
        /*mix-blend-mode: exclusion;*/
    }
</style>
