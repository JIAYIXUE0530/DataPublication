
<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<h1>{data.title}</h1>
<img src={data.primaryImage} alt={data.title} height="500" />