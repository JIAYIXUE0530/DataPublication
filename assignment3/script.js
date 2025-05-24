/**
 * A Map object that stores library items.
 * - The key is a unique book name.
 * - The value is an object containing the book's author ("author"),
 * year of publication ("publicationYear"), and genre ("genre").
 */
const libraryMap = new Map();

// Starting set of two books
libraryMap.set("The Great Gatsby", {
  author: "F. Scott Fitzgerald",
  publicationYear: 1925,
  genre: "Classic Fiction",
});

libraryMap.set("To Kill a Mockingbird", {
  author: "Harper Lee",
  publicationYear: 1960,
  genre: "Classic Fiction",
});

/** STEPS FOR ASSIGNMENT:
    /* 1) Get values from inputs
    /* 2) Validate input values
    /* 3) Add values to libraryMap with the book name as key
    /* 4) Create new list item with the values from inputs as text
    /* 5) Add list item to unordered list
    /* 6) Render the list of books in the DOM
    /* 7) Display the total number of books in the libraryMap
    */
//

/**
 * Function to add a book to the libraryMap; runs on button click
 */
function addBookToLibrary() {
  try {
    const bookNameInput = document.querySelector("#bookName").value;
    const authorInput = document.querySelector("#author").value;
    const publicationYearInput =
      document.querySelector("#dateofPublication").value;
    const genreInput = document.querySelector("#genre").value;

    // Validate input values
    const bookName = validateInputValues(bookNameInput, "bookName");
    const author = validateInputValues(authorInput, "author");
    const publicationYear = validateInputValues(
      publicationYearInput,
      "publicationYear"
    );
    const genre = validateInputValues(genreInput, "genre");

    // Check if the book name already exists in the libraryMap
    if (libraryMap.has(bookName)) {
      alert("This book already exists in the library");
      return;
    }

    libraryMap.set(bookName, {
      author: author,
      publicationYear: publicationYear,
      genre: genre,
    });

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerText = `Book: ${bookName}, Author: ${author}, Year: ${publicationYear}, Genre: ${genre}`;
    // Append the new list item to the unordered list
    const list = document.querySelector("#bookList");
    list.appendChild(listItem);

    displayAllBooks();
    displayTotalBooks();

    alert("Book added to library");
  } catch (error) {
    alert(`ERROR: ${error.message}`);
  }
}

/**
 * Function to display the total number of books in the libraryMap
 */
function displayTotalBooks() {
  const totalBooks = libraryMap.size;
  const totalBooksNum = document.querySelector("#totalBooks");
  totalBooksNum.innerText = `Total number of books: ${totalBooks}`;
}

/**
 * Helper function to validate that input values are in the expected format
 */
function validateInputValues(inputValue, key) {
  if (typeof inputValue !== "string") {
    throw new Error("Input value type is incorrect");
  } else if (inputValue.length === 0) {
    throw new Error("You must enter a value");
  } else if (
    key === "publicationYear" &&
    (Number.isNaN(Number(inputValue)) || inputValue.length > 4)
  ) {
    throw new Error("Year of publication must be a valid year");
  }

  if (key === "publicationYear") {
    return Number(inputValue);
  } else {
    return inputValue.trim();
  }
}

/*
 * Function to display all books in the libraryMap in the DOM
 */
function displayAllBooks() {
  const list = document.querySelector("#bookList");
  // Clear the list (this is to avoid duplicates)
  list.innerHTML = "";

  // Display each book in the libraryMap
  for (const [name, details] of libraryMap.entries()) {
    const listItem = document.createElement("li");
    listItem.innerText = `Book: ${name}, Author: ${details.author}, Year: ${details.publicationYear}, Genre: ${details.genre}`;
    list.appendChild(listItem);
  }
}

//
window.onload = function () {
  displayAllBooks();
  displayTotalBooks();
};
