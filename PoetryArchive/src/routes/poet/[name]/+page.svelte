<script>
	const { data } = $props();
	const poems = data.poems;

	let query = $state();
</script>

<h1 class='text-3xl font-bold mb-6'>{data.name}</h1>

<div>
	<label for="query" class='text-sm font-medium text-gray-500 mb-3'>Query</label>
	<input type="text" id="query" bind:value={query} class='mb-3 rounded-sm w-64 h-8'/>
	
	<!--'query === undefined' is uesd for debug of showing nothing without any query-->
	{#if query === '' || query === undefined}
		{#each poems as poem}
			<div class='bg-gray-100 mx-32'>
				<p class='font-bold'>{poem.title}</p>
				<li>{poem.lines}</li>
				<li>Number of lines: {poem.numberOfLines}</li>
				<li>Number of words: {poem.numberOfWords}</li>
				<br />
				<br />
			</div>
		{/each}
	{:else}
		<!---filter function and "or" logic I looked up our course slides and also learned from iclaude.ai-->
		{#each poems.filter(poem => 
			(poem.title.includes(query)) || 
			(poem.lines.some(line => line.includes(query)))) as poem}
			<div class='bg-gray-100 mx-32'>
				<p class='font-bold'>{poem.title}</p>
				<li>{poem.lines}</li>
				<li>Number of lines: {poem.numberOfLines}</li>
				<li>Number of words: {poem.numberOfWords}</li>
			</div>
		{:else}
			<p>The content you are searching for does not exist.</p>
		{/each}
	{/if}

</div>


