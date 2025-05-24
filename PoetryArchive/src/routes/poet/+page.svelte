<script>
	let { data } = $props();
</script>

<div class='text-6xl text-bold mb-6'>
	<h1>Poet Database</h1>
</div>

<p class='mx-8 text-gray-500'>
	This website aims to build up an open database about poets and their poetry. <br />
	Until now, we have collected {data.numberOfPoets} poets relative info. <br />
	You can find each poet's name, how many portey do they have and the single page of specific information about them. <br />
	Just try to explore!
</p>

<br />

<p class='mx-8'>View the poets from here:</p>
	
<ul class='mx-16'>
	{#each data.poets as poet}
		<li>
			<a href="/poet/{poet.name}">{poet.name}</a>
			 : {poet.numberOfPoems} poetries in our database.
		</li>
	{/each}
</ul>	
