<script>
	const { data } = $props();

	let query = $state('');
	let finalQuery = $state('');

	const poems = $derived.by(() => {
		if (query.trim() === '') {
			return data.poems;
		} else {
			return data.poems.filter(
				(poem) =>
					poem.title.toLocaleLowerCase().includes(finalQuery.toLocaleLowerCase('en-US')) ||
					poem.lines.some((line) =>
						line.toLocaleLowerCase('en-US').includes(finalQuery.toLocaleLowerCase('en-US'))
					)
			);
		}
	});

	$inspect(data);
</script>

<main class="prose mx-auto px-4 py-10">
	<a href="/" class="mb-4 block text-sm text-neutral-600">Back to poets</a>
	<h1 class="text-2xl md:text-6xl">{data.name}</h1>
	<p>Displaying {poems.length} poem{poems.length === 1 ? '' : 's'}</p>
	<div>
		<input type="text" bind:value={query} placeholder="Search poems" />
		<button
			class="cursor-pointer bg-green-500 text-white"
			onclick={() => {
				finalQuery = query;
			}}>Search</button
		>
	</div>
	<h2>Poems</h2>
	<ul class="m-0 list-none p-0">
		{#each poems as poem}
			<li>
				<h3>{poem.title}</h3>
				<div><span class="font-bold">Number of lines:</span> {poem.numberOfLines}</div>
				<div><span class="font-bold">Number of words:</span> {poem.numberOfWords}</div>
				<div class="mt-2 leading-6">
					{#each poem.lines as line}
						<div>{line}</div>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</main>
