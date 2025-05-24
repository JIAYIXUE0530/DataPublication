<script>
	const { data } = $props();
</script>

<h1>{data.title}</h1>
<img src={data.primaryImage} alt={data.title} height="300" />
<ul>
	<li>
		<span class="label">Medium:</span>
		{data.medium}
	</li>
	<li>
		<span class="label">Dimensions:</span>
		{data.dimensions}
	</li>
	<li>
		<span class="label">Artist:</span>
		{data.artistDisplayName}
	</li>
	<li>
		<span class="label">Artist Biography:</span>
		{data.artistDisplayBio}
	</li>
	<li>
		<span class="label">Department:</span>
		{data.department}
	</li>
	<li>
		<span class="label">Repository:</span>
		{data.repository}
	</li>
	{#if data.isPublicDomain}
		<li>This artwork is in the public domain.</li>
	{/if}
</ul>
<p>
	View the artwork on the Met's website
	<a href={data.objectURL} target="_blank">here</a>.
</p>

<style>
	.label {
		font-weight: bold;
	}
</style>
