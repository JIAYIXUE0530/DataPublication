<script>
	const numbers = [1, 2, 3, 4, 5];
</script>

<h1>Home page</h1>
<p>This is my home page, hello!</p>
{#each numbers as number}
	<h3>This number is {number}.</h3>
	<p>I like this number.</p>
	<p>Two times {number} is equal to {number * 2}.</p>
{/each}
