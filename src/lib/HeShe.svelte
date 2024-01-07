<script>
    import BgImg from "$lib/BgImg.svelte"

    export let gender = undefined
    let otherGender = gender === 'he' ? 'she' : 'he'

    import mainFlow, {createPopup} from "$lib/main-flow.js"

    import { page } from '$app/stores'
    import {goto} from "$app/navigation"
    import {onDestroy, onMount} from "svelte"

    import bgImg from "./BgImg.svelte"
    import text from "./Text.svelte"
    import circleText from "./CircleText.svelte"
    import circleImg from "./CircleImg.svelte"
    import circleAttr from "$lib/CircleAttr.svelte"
    // eslint-disable-next-line no-unused-vars
    const comps = {
        bgImg, text, circleText, circleImg, circleAttr
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
        mainFlow[current][gender].onMount()
        window.focus()

    })
    onDestroy(() => {
        mainFlow[current][gender].onDestroy()
        // eslint-disable-next-line no-debugger
        debugger
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

    $: hasImage = currentPage.modules.find(module => module.type === 'bgImg') || currentPage.bgImg

    let onKeyDown = (event) => {
        console.log('onKeyDown', event)
        if (event.key === 'ArrowRight') {
            defaultClick(event, 'NEXT')
        }
        if (event.key === 'ArrowLeft') {
            defaultClick(event, 'BACK')
        }
    }
    let defaultClick = (event, NEXT = currentPage.next) => {
        console.log('NEXT', event, NEXT, currentPage)
        if (NEXT === undefined || NEXT === 'NEXT') {
            if (nextPage) {
                createPopup(`/${gender}`, {p: current + 1}, nextPage.pos, gender)
            }
            if (nextPageOther) {
                createPopup(`/${otherGender}`,{p: current + 1}, nextPageOther.pos, otherGender)
            }
            // let daddy = window.self;
            // daddy.opener = window.self;
            // daddy.close();
        }
        if (NEXT === 'BACK') {
            try {
                createPopup(`/${gender}`, {p: current - 1}, undefined, gender)
                createPopup(`/${otherGender}`,{p: current - 1}, undefined, otherGender)
            } catch (e) {
                console.log(e)
            }
        }
        if (NEXT === 'self') {
            current++
            $page.url.searchParams.set('p', current);
            goto(`?${$page.url.searchParams.toString()}`);
        } else {
            currentPage.next()
        }
    }

    let title = ''
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

<svelte:body on:click={defaultClick } on:keydown={onKeyDown}/>

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

<div class="contentWrapper">
{#each availableModules as module}
    <svelte:component this={comps[module.type]} config="{module}" on:NEXT={(e) => defaultClick(e,'NEXT')}/>
{/each}
</div>
<div class="defaultBG">
{#if currentPage.bgImg}
    <BgImg config="{{url: currentPage.bgImg}}"/>
{:else if !hasImage}
    <BgImg config="{{url: '/waves.gif'}}"/>
{/if}
</div>

<style>
    .contentWrapper {
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 0.2rem;
    }
    .defaultBG {
        position: absolute;
        z-index: -1000;
    }
</style>
