<script>
	const { data } = $props();
</script>

<h1>Wikipedia search results for "Chicago"</h1>
<ul>
	{#each data.query.search as item}
		<li>
			<a href="https://en.wikipedia.org/wiki/{item.title}" target="_blank">{item.title}</a>
			<p>{@html item.snippet}</p>
		</li>
	{/each}
</ul>
