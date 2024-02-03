<script>
	export let config = {};

	$: url = config.url || '/waves.gif';

	// if (config.url === undefined) {
	//     console.log('config.url is undefined')
	//     url = '/waves.gif'
	// }
	$: isFilter = config.filter === undefined;
	$: filterClass = Number.isInteger(config.filter) ? 'filter-' + config.filter : '';
	$: console.log('Url in BgImage changed', url);
</script>

<!--<img src="{config.url}" alt="test">-->
<div class="bgImg {filterClass}" class:filter={isFilter} style={'--bgimg: url(' + url + ')'}></div>

<style>
	.filter {
		filter: blur(3px) brightness(2) grayscale(100%) sepia(100%) hue-rotate(240deg);
	}
	.filter-1 {
		filter: blur(3px) contrast(1.2) brightness(1) grayscale(100%) sepia(100%) hue-rotate(240deg);
	}
	.filter-10 {
		filter: blur(10px) contrast(1.5) brightness(1) grayscale(100%) sepia(100%) hue-rotate(240deg);
	}
	.filter-11 {
		filter: blur(3px) contrast(1.2) brightness(1) grayscale(100%) sepia(100%) hue-rotate(300deg);
	}
	.filter-12 {
		filter: blur(0px) contrast(2.5) brightness(1.4) grayscale(50%) sepia(100%) hue-rotate(240deg);
	}
	.filter-13 {
		filter: blur(0px) contrast(2.5) brightness(1.4) grayscale(50%) sepia(100%)
			drop-shadow(16px 16px 20px red) hue-rotate(240deg);
	}
	.filter-14 {
		filter: invert(75%) blur(0px) contrast(2.5) brightness(1.4) grayscale(100%) sepia(100%)
			hue-rotate(240deg);
	}
	.filter-15 {
		filter: saturate(400%) contrast(3) brightness(1.4);
	}
	.filter-16 {
		filter: drop-shadow(26px 26px 30px red) saturate(400%) contrast(3) brightness(1.4)
			hue-rotate(240deg);
	}
	.filter-17 {
		filter: grayscale(1) brightness(0.5) contrast(500) blur(1px);
	}
	.filter-18 {
		filter: grayscale(1) contrast(500);
	}

	.bgImg {
		image-rendering: pixelated;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-image: var(--bgimg);
		background-size: cover;

		z-index: -100;
	}
</style>
