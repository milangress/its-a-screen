<script>
    import {onMount} from "svelte"
    import {page} from "$app/stores"
    import Text from "$lib/Text.svelte"
    import BgImg from "$lib/BgImg.svelte"
    import CircleImg from "$lib/CircleImg.svelte"

    let text = ''
    let num = 0
    onMount(() => {
        text = $page.url.searchParams.get('txt')
        num = parseInt($page.url.searchParams.get('num'))
        setFilter()
    })
    let filter = 0
    function setFilter() {
        filter = Math.floor(Math.random() * 5 + 10)
    }
    $: config = {
        url: ['/Sunflower1.png', '/Sunflower2.png'],
        // filter: Math.floor(Math.random() * 5 + 10)
        filter: filter
    }
    function handleClick() {
        console.log('click sunflower')
        setFilter()
        newState()
    }

    let showText = false
    function newState() {
        showText = true
        console.log('new state')
    }
    const texts = {
        12: 'So every night',
        1: 'I put a little bowl with sunflower seeds',
        5: 'on the window sims,',
        11: 'hoping the sandman',
        6: 'would get distracted',
        7: 'on his ways to my eyes',
        2: 'and peter-pan',
        8: 'would fly',
        14: 'past the sunflower seeds.',
        13: 'and carry me away',
    }

    $: count = [12, 1, 5, 11, 6, 7, 2, 8, 14, 13].indexOf(num)
    $: countString = count >= 0 ? count.toString() : '0'
    $: console.log(num, num === 8)
    $: text = texts[num] || ''
</script>

<svelte:head>
    <title>{countString}</title>
</svelte:head>

<svelte:body on:click={handleClick } />


<div on:click={handleClick} class="hover">

{#if showText}
    <Text config={{content: text}}/>
{/if}

<BgImg config="{{url: '/sun2.gif'}}"></BgImg>

<CircleImg config="{config}" on:NEXT={newState}></CircleImg>
</div>


<style>
    .hover {
        cursor: pointer;
        transition: filter 3.5s ease-in-out;
    }
    .hover:hover {
        filter: blur(25px) contrast(1.5) brightness(1.5);
    }
</style>

