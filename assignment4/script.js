/*
 * This function is being called when the user clicks the "Search" button.
 */
async function searchWikipedia() {
  const query = document.querySelector("#search").value;

  /* TASK 2: Validate the search query
   * The search query must not be empty and must be at least 3 characters long.
   */
  // YOUR CODE HERE
  if (query.trim().length < 3) { // trim(): revomes whitespace 
    alert("Please enter a search term with at least 3 characters.");
    return;
  }

  
  // Clear the results before starting a new search
  clearResults();

  const apiUrl = createApiUrl(query);

  await fetchWikipedia(apiUrl);
}

/*
 * This function fetches data from the Wikipedia API, given a valid URL.
 */
async function fetchWikipedia(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // The result of the API call is stored in data.query.search
    // You can view the data in your browser's console
    console.log(data);

    /* TASK 3: Display the search results on the page
     * You need to create a list of search results, where each result is a link
     * to the Wikipedia article and contains a short snippet of the article.
     * NOTE: Only the title should be a link, the snippet should be plain text.
     * The link should point to the Wikipedia article, e.g.:
     * "https://en.wikipedia.org/wiki/Chicago"
     * The link should open in a new tab.
     */
    // YOUR CODE HERE
      const resultsElement = document.querySelector("#results");

      data.query.search.forEach(result => {
        const title = result.title;
        const snippet = result.snippet;
        const link = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a> <p>${snippet}</p>`;
        resultsElement.appendChild(listItem);
      });
  } catch (error) {
    console.error(`ERROR: ${error}`);
    const resultsElement = document.querySelector("#results");
    resultsElement.innerHTML = "An error occurred while fetching data.";
    resultsElement.style.color = "red";
  }
}

/*
 * Helper function to clear the search results from the page.
 */
function clearResults() {
  const resultsElement = document.querySelector("#results");

  resultsElement.innerHTML = "";
}

/*
 * Helper function to create the API URL for the Wikipedia search.
 */
function createApiUrl(query) {
  // Creating the base URL for the Wikipedia API
  const hostname = "https://en.wikipedia.org";
  const path = "/w/api.php";
  const apiUrl = new URL(path, hostname);

  // Creating a map to set the search parameters for the API request
  const searchParamsMap = new Map();

  // You don't need to understand the details of these parameters,
  // but they are required for this specific API to return the correct data
  searchParamsMap
    .set("action", "query")
    .set("origin", "*")
    .set("format", "json")
    .set("list", "search")
    .set("srsearch", query);
  const searchParams = new URLSearchParams(searchParamsMap);

  // If you are curious, here is how the URL looks like (query: "Chicago"):
  // https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=Chicago

  // Putting it all together and fetching the data from the Wikipedia API
  apiUrl.search = searchParams.toString();

  return apiUrl.toString();
}
