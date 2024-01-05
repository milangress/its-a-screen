<script>
    export let config = {}


</script>

<div>
<p>{@html config.content}</p>
</div>


<style>
    div {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    p {
        color: red;
    }
</style>
