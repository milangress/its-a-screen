<script>
    export let config = {
        content: ['first', 'second', 'third']
    }

    let titleAttr = config.content[0]
    let duration = config?.duration ||2500

    function circle() {
        let i = 0
        setInterval(() => {
            titleAttr = config.content[i]
            i++
            if (i === config.content.length) {
                i = 0
            }
        }, duration)
    }
    circle()
</script>

<!--<svelte:body title="{titleAttr}" />-->
<div class="titlehover" title="{titleAttr}"></div>


<style>
    .titlehover {
        position: absolute;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
    }
</style>
