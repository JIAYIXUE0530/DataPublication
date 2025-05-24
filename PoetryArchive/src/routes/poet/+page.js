import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const response = await fetch(
		'https://digs30005-poetry-database.firatciftci.workers.dev'
	);
	if (!response.ok) {
		throw error(500, 'Failed to fetch data');
	}

	const data = await response.json();

	return data;
}
