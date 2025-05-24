export async function load({ fetch }) {
	const apiUrl =
		'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=Chicago';

	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error('Response failed!');
	}

	const data = await response.json();

	return data;
}
