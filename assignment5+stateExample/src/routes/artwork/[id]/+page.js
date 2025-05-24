import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const response = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.id}`
	);
	if (!response.ok) {
		throw error(404, 'Not found');
	}

	const data = await response.json();

	return data;
}
