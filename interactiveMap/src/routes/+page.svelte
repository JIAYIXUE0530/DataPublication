<script lang='ts'>
    import * as Table from "$lib/components/ui/table/index.js";
    import { fetchItem, getUniquePropertyLabels } from '@digitalculture/ochre-sdk';
    import { DefaultMarker, MapLibre } from 'svelte-maplibre';

    const { data } = $props();

    $inspect(data);

    const propertyLabels = getUniquePropertyLabels(data.items[0].properties);

    // const { markers } = 
</script>

<main class="mx-12 my-8">
    <MapLibre
    class="map h-[500px] mb-4 rounded-lg shadow-md border-1 border-gray-800"
    standardControls={true}
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
        {#each data.items as item}
            {#if item.coordinates?.longitude && item.coordinates?.latitude}
                <DefaultMarker lngLat={{ 
                    lng: item.coordinates.longitude, 
                    lat: item.coordinates.latitude 
                }} />
            {/if}
        {/each}
    </MapLibre>

    <Table.Root>
        <Table.Caption>{data.identification.label}</Table.Caption>
        <Table.Header>
            <Table.Row>
                {#each propertyLabels as label}
                    <Table.Head>{label}</Table.Head>
                {/each}
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {#each data.items as info}
                <Table.Row>
                    <Table.Cell><a href="/{info.uuid}">{info.identification.label}</a></Table.Cell>
                    {#each info.properties as property}
                        <Table.Cell>{property.values[0]?.content}</Table.Cell>
                    {/each}
                </Table.Row>
                
            {/each}
        </Table.Body>
    </Table.Root>
</main>