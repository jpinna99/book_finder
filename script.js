// Click handler for search button
const captureSearchValue = () => {
    let searchString = document.getElementById("search-bar").value;
    let searchStringLowerCase = searchString.toLowerCase();
    return searchStringLowerCase;
};

// Filter books based on search input
const filterBooks = (string, bookList) => {
  let flatBookList = flattenObjectValuesIntoArray(bookList);
  let filteredBooks = [];
  for (let i = 0; i < bookList.length; i++) {
    if (flatBookList[i].includes(string)) {
        filteredBooks.push(bookList[i]);
    }
  }
  return filteredBooks;
};


// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (bookList) => {
    let formattedBooks = [];
    for (let i = 0; i <bookList.length; i++) {
        let structuredBook = structureBookAsHtml(bookList[i]);
        formattedBooks.push(structuredBook);
    }
      return formattedBooks;
};


// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (array) => {
    let bookMatches = filterBooks(captureSearchValue(), array);
    let structuredBooks = structureBooksAsHtml(bookMatches);
    renderBooksToDom(structuredBooks);
};

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');


// Attach an event listener to the search button
searchBtn.addEventListener('click', () => { searchBtnClickHandler(books) });
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtnClickHandler(books);
  }
});