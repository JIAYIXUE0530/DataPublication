<script>
	import Navbar from '$lib/components/navbar.svelte';

	const { children } = $props();
</script>

<Navbar title="My Amazing Website" isPink={true} />
<br />
<Navbar title="The Met Inventory Page" isPink={false} />
<br />
<Navbar title="" isPink={false} />
<main>
	{@render children()}
</main>

<style>
	:global(body) {
		font-family: 'Helvetica', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		padding-left: 2rem;
		padding-right: 2rem;
	}
</style>
