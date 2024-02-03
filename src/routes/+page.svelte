<script>
	function openPopup() {
		window.open('/he', String(Math.random()), 'left=50,top=50,width=200,height=100,popup');
	}
</script>

<!-- eslint-disable-next-line -->
<a on:click={openPopup}>test</a>
