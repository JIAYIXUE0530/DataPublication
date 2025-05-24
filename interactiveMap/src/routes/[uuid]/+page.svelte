<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { fetchItem, getUniquePropertyLabels } from '@digitalculture/ochre-sdk';
    
    const { data } = $props();

</script>

<main class="mb-6 mx-32 my-12">
    <div class="mb-6">
        <Button variant="outline" href="/">Home</Button>
    </div>


    <h1 class="text-3xl font-bold mb-12 text-left">
        {data.identification.label}
    </h1>
        
    {#if data.image}
        <div class="flex justify-center mb-8">
            <img src={data.image.url} alt="">
        </div>
    {/if}

    <!-- 
    Styling source: Claude.ai
    
    grid: Sets container to CSS Grid layout
    grid-cols-1: Default single column layout (mobile)
    md:grid-cols-2: Changes to two-column layout on medium screens and above (768px+)
    gap-6: Grid item spacing of 1.5rem (24px)
    mx-auto: Horizontal center alignment (auto margin-left and margin-right)
    -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {#each data.properties as property}
            <p class="font-bold">{property.label}:</p> 
                {#each property.values as value}
                    <p>{value.content}</p>
                {/each}
        {/each}
    </div>
</main>