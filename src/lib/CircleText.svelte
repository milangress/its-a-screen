<script>
	import Text from '$lib/Text.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let config = {};

	let currentText = config.content[0];

	function step() {
		console.log('step');
		if (currentText) {
			const index = config.content.indexOf(currentText);
			if (index < config.content.length - 1) {
				currentText = config.content[index + 1];
			} else if (config.STOP === undefined) {
				dispatch('NEXT');
			}
		}
	}
</script>

<svelte:body on:click={step} />

<div class="circleText">
	{#if currentText}
		<Text config={{ content: currentText }} />
	{/if}
</div>

<style>
	.circleText {
		cursor: cell;
	}
</style>
