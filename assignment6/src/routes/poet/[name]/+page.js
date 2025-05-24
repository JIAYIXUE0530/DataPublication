export async function load({ params, fetch }) {
	const { name } = params;

	const response = await fetch(
		`https://digs30005-poetry-database.firatciftci.workers.dev/poet/${encodeURIComponent(name)}`
	);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();

	return data;
}
