const a = 1
const b = 2

function assignValue() {
    let b = 8;

    if (a === 1) {
        b = 1;
    } else {
        b = 2;
    }
}

assignValue();

console.log("the value of 'b' is ${b}");


// ----------------------------
const urlQuery = encodeURIComponent(query);
  const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${urlQuery}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      result.innerHTML = "No results found.";
      result.style.color = "red";
      results.style.fontWeight = "bold";

    const data = await response.json();
    fetchWikipedia(data.query.search);
  } catch (error) {
    console.error("Error fetching data from Wikipedia API:", error);
    result.innerHTML = "An error occurred while fetching data.";
    result.style.color = "red";
    results.style.fontWeight = "bold";
  }