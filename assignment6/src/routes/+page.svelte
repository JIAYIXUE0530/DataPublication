<script>
	const { data } = $props();

	const { numberOfPoets, poets } = data;
</script>

<main class="prose mx-auto py-10">
	<h1>Poets</h1>
	<p>This is a website about famous poets and their works.</p>
	<p>There are {numberOfPoets} poets in the database.</p>
	<ul>
		{#each poets as poet}
			<li><a href={`/poet/${poet.name}`}>{poet.name}</a>: {poet.numberOfPoems} poems</li>
		{/each}
	</ul>
</main>
