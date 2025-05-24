<script>
	const { children } = $props();
</script>

<h2>About page</h2>
{@render children()}

<style>
	h2 {
		color: blue;
	}
</style>
