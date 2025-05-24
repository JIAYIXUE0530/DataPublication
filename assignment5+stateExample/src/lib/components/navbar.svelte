<script>
	const { title, isPink } = $props();
</script>

<nav style="background-color: {isPink ? 'pink' : 'lightgrey'}">
	<h3>{title}</h3>
	<div class="nav-links">
		<a href="/">Home</a>
		<a href="/wheat-field">Wheat Field with Cypresses</a>
		<a href="/washington">Washington Crossing the Delaware</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		background-color: lightgray;
		padding: 1rem;
	}

	h3 {
		margin: 0;
	}

	.nav-links {
		display: flex;
		gap: 1.5rem;
	}
</style>
