<script>
    import {onMount} from "svelte"
    import {page} from "$app/stores"
    import Text from "$lib/Text.svelte"

    let text = ''
    onMount(() => {
        text = $page.url.searchParams.get('txt')
    })
</script>

<svelte:head>
    <title>{text}</title>
</svelte:head>

<Text config={{content: text}}/>

