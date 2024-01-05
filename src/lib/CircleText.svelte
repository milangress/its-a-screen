<script>
    import Text from "$lib/Text.svelte"
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let config = {}

    let currentText = config.content[0]

    function step() {
        if (currentText) {
            const index = config.content.indexOf(currentText)
            if (index < config.content.length - 1) {
                currentText = config.content[index + 1]
            } else {
                dispatch('NEXT')
            }
        }
    }
</script>

<svelte:body on:click={step } />

{#if currentText}
    <Text config="{{content: currentText}}" />
{/if}
