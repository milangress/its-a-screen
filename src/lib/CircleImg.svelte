<script>
	import BgImg from '$lib/BgImg.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let config = {};

	let currentImg = config.url[0];

	function step() {
		console.log('step image');
		if (currentImg) {
			const index = config.url.indexOf(currentImg);
			if (index < config.url.length - 1) {
				currentImg = config.url[index + 1];
				console.log('currentImg', currentImg);
			} else {
				dispatch('NEXT');
			}
		}
	}
	$: bgConfig = {
		...config,
		url: currentImg
	};
	$: console.log('bgConfig', bgConfig);
</script>

<svelte:body on:click={step} />

{#if currentImg}
	<BgImg config={bgConfig} />
{/if}
