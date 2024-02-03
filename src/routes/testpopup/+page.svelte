<script>
	import { page } from '$app/stores';

	let w = ['we', 'are', 'just', 'looking', 'at', 'each', 'other'];
	//pick random word from array
	let randomWord = w[Math.floor(Math.random() * w.length)];

	const currentPage = $page.route.id;

	function openMultipleWindows() {
		if (!currentPage) throw new Error('No current page');
		for (let i = 0; i < 3; i++) {
			let l = Math.random() * window.screen.width;
			let h = Math.random() * window.screen.height;
			window.open(
				currentPage,
				String(Math.random()),
				'left=' + l + ', top=' + h + ', width=200,height=100,popup'
			);
		}
	}
</script>

<svelte:head>
	<title>{randomWord}</title>
</svelte:head>

<!-- eslint-disable-next-line -->
<h2 on:click={openMultipleWindows}>{randomWord}</h2>
