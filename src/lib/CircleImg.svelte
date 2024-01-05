<script>
    import BgImg from "$lib/BgImg.svelte"
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let config = {}

    let currentImg = config.url[0]

    function step() {
        if (currentImg) {
            const index = config.url.indexOf(currentImg)
            if (index < config.url.length - 1) {
                currentImg = config.url[index + 1]
            } else {
                dispatch('NEXT')
            }
        }
    }
</script>

<svelte:body on:click={step } />

{#if currentImg}
    <BgImg config="{{url: currentImg}}" />
{/if}
