<script>
    // sourced from https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
    // and https://svelte.dev/docs/kit/routing
    export let data;
    const { artwork } = data;
  </script>
  
<div style="text-align: center;">
  <h1>{artwork.title}</h1>
  <img src={artwork.primaryImage} alt={artwork.title} style="max-width: 500px;"/>
  
    <!-- searched from https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance  -->
  <p><strong>Medium:</strong> {artwork.medium}</p> 
  <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
  <p><strong>Artist:</strong> {artwork.artistDisplayName}</p>
  <p><strong>Artist Bio:</strong> {artwork.artistDisplayBio}</p>
  <p><strong>Department:</strong> {artwork.department}</p>
  <p><strong>Repository:</strong> {artwork.repository}</p>
  
  {#if artwork.isPublicDomain}
    <p><span style="color: green; font-weight: bold;">Public Domain</span></p>
  {/if}
  
  <p><a href={artwork.objectURL} target="_blank">View on The Met Website</a></p>
</div>
  