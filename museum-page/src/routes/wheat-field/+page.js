export async function load() {
	const apiUrl =
		'https://collectionapi.metmuseum.org/public/collection/v1/objects/436535';

	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error('Response failed!');
	}

	const data = await response.json();

	return {artwork: data}; // sourced from https://svelte.dev/docs/kit/routing
}
