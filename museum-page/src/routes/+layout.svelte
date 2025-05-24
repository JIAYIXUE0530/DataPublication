<script>
    import Navbar from "$lib/components/navbar.svelte";
    
    let props = $props();
    const { children } = props;
</script>

<Navbar title="My Amazing Website" />


{@render children()}


