<script>
    export let gender = 'he'
    let otherGender = gender === 'he' ? 'she' : 'he'

    import mainFlow from "$lib/main-flow.js"

    import { page } from '$app/stores'
    import {goto} from "$app/navigation"
    import {onMount} from "svelte"

    import bgImg from "./BgImg.svelte"
    import text from "./Text.svelte"
    import circleText from "./CircleText.svelte"
    // eslint-disable-next-line no-unused-vars
    const comps = {
        bgImg, text, circleText
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
        setTitle()
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

    $: availableModules = currentPage.modules.filter(module => comps[module.type])
    let defaultClick = (event, NEXT = currentPage.next) => {
        console.log('NEXT', event, NEXT, currentPage.next)
        if (NEXT === undefined || NEXT === 'NEXT') {
            if (nextPage) {
                window.open(`/${gender}?p=${current + 1}`, `${gender}`, nextPageWindowString + ",popup");
            }
            if (nextPageOther) {
                window.open(`/${otherGender}?p=${current + 1}`, `${otherGender}`, nextPageOtherWindowString + ",popup");
            }
            // let daddy = window.self;
            // daddy.opener = window.self;
            // daddy.close();
        if (NEXT === 'self') {
                current++
                $page.url.searchParams.set('p', current);
                goto(`?${$page.url.searchParams.toString()}`);
            }
        } else {
            currentPage.next()
        }
    }

    let title = 'he'
    function setTitle() {
        const currentDoc = mainFlow[current][gender]
        title = currentDoc.title || gender
        console.log(current)
        console.log('title', title, mainFlow[current][gender])
        let circleTitle = currentDoc.modules.find(module => module.type === 'circleTitle')
        if (circleTitle) {
            let titleCounter = 0
            setInterval(function(){
                console.log('circleTitle', titleCounter)
                if (titleCounter >= circleTitle.content.length) {
                    titleCounter = 0
                }
                title = circleTitle.content[titleCounter]
                titleCounter++
            }, 800);
        } else if (title.length >= 10){
            setInterval(function(){
                title = title.substring(1, title.length) + title.substring(0, 1);
            }, 100);
        }
    }


</script>



<svelte:head>
    <title>{title}</title>
</svelte:head>

<svelte:body on:click={defaultClick } />

{#if false || current === 0}
    {gender}, {otherGender}
    <hr>
    current: {current}

    {nextPageWindowString}
    <hr>
    {nextPageOtherWindowString}
    <hr>
    {#each currentPage.modules as module}
        <div>
            {module.type}
            <pre>{JSON.stringify(module, null, 2)}</pre>
        </div>
    {/each}
{/if}

{#each availableModules as module}
    <svelte:component this={comps[module.type]} config="{module}" on:NEXT={(e) => defaultClick(e,'NEXT')}/>
{/each}

