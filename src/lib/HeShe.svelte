<script>
    export let gender = 'he'
    let otherGender = gender === 'he' ? 'she' : 'he'

    import mainFlow from "$lib/main-flow.js"

    import { page } from '$app/stores'
    import {goto} from "$app/navigation"
    import {onMount} from "svelte"

    import bgImg from "./BgImg.svelte"
    import text from "./Text.svelte"
    // eslint-disable-next-line no-unused-vars
    const comps = {
        bgImg, text
    }

    let current = 0
    onMount(() => {
        current = Number($page.url.searchParams.get('p')) || 0

        if(mainFlow[current][gender] === null) {
            window.close()
        }

        if(mainFlow[current][gender].pos) {
            window.moveTo(mainFlow[current][gender].pos?.left, mainFlow[current][gender].pos?.top)
            window.resizeTo(mainFlow[current][gender].pos?.width, mainFlow[current][gender].pos?.height)
            // window.moveTo(0,0)
        }
        console.log(mainFlow[current][gender])
    })

    let currentPage = {}
    $: currentPage = mainFlow[current] ? mainFlow[current][gender] : {modules: []}
    let nextPage = {}
    $: nextPage = mainFlow[current + 1] ? mainFlow[current + 1][gender] : undefined
    let nextPageOther
    $: nextPageOther = mainFlow[current + 1] ? mainFlow[current + 1][otherGender] : undefined
    let posString = (windowSize) => {
        if (windowSize === undefined || windowSize?.pos === undefined) {
            return ''
        } else {
            return `left=${windowSize.pos.left},top=${windowSize.pos.top},width=${windowSize.pos.width},height=${windowSize.pos.height}`
        }
    }
    $:nextPageWindowString = posString(nextPage)
    $:nextPageOtherWindowString = posString(nextPageOther)
    let defaultClick = () => {
        if (currentPage.next === 'self') {
            current++
            $page.url.searchParams.set('p', current);
            goto(`?${$page.url.searchParams.toString()}`);
        }
        if (currentPage.next === undefined) {
            if (nextPage) {
                window.open(`/${gender}?p=${current + 1}`, `${gender}`, nextPageWindowString + ",popup");
            }
            if (nextPageOther) {
                window.open(`/${otherGender}?p=${current + 1}`, `${otherGender}`, nextPageOtherWindowString + ",popup");
            }
            // let daddy = window.self;
            // daddy.opener = window.self;
            // daddy.close();
        } else {
            currentPage.next()
        }
    }


</script>



<svelte:head>
    <title>he</title>
</svelte:head>

<svelte:body on:click={defaultClick } />
{gender}, {otherGender}
<hr>
current: {current}

{nextPageWindowString}
<hr>
{nextPageOtherWindowString}

{#each currentPage.modules as module}
    <div>
        {module.type}
    </div>
    <svelte:component this={comps[module.type]} config="{module}"/>
{/each}

