<script>
    import {onMount} from "svelte"
    import {page} from "$app/stores"
    import BgImg from "$lib/BgImg.svelte"

    let url = undefined
    let config = undefined
    onMount(() => {
        url = $page.url.searchParams.get('url')
        config = $page.url.searchParams.get('config')
        console.log(url, config)
    })
    // eslint-disable-next-line no-unused-vars
    function click() {
        let daddy = window.self;
        daddy.opener = window.self;
        daddy.close();
    }

    $: configJson = config ? JSON.parse(config) : {}

    $: configObj = {
        url: url,
        ...configJson
    }
</script>

<svelte:head>
    <title>img</title>
</svelte:head>
<div>
    <BgImg config="{configObj}"></BgImg>
</div>
