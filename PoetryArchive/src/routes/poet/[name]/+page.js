import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const response = await fetch(
		`https://digs30005-poetry-database.firatciftci.workers.dev/poet/${params.name}`
	);
	if (!response.ok) {
		throw error(404, 'Not found');
	}

	const data = await response.json();

	return data;
}
