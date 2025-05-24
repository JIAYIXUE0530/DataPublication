<script>
	const { children } = $props();
</script>

<nav>Data Publication for the Humanities</nav>
{@render children()}
<footer>This is a DIGS class at UChicago.</footer>

<style>
	nav {
		background-color: maroon;
		color: white;
		font-family: Helvetica;
		font-weight: bold;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		border-radius: 8px;
	}

	footer {
		background-color: lightgray;
		font-family: Helvetica;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		border-radius: 8px;
	}
</style>
