import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const response = await fetch(
		'https://collectionapi.metmuseum.org/public/collection/v1/objects/11417'
	);
	if (!response.ok) {
		throw error(500, 'Failed to fetch data');
	}

	const data = await response.json();

	return data;
}
