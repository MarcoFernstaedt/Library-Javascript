// Declare empty array for Library
const myLibrary = [];

// Object Constructor 
function Books(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

// Method
Books.prototype.info = function () {
    return this
}

// Function for adding new book to array
function addBookToLibrary(title, author, pages, read) {
    let book = new Books(title, author, pages, read)
    myLibrary.push(bookn)
}

// Display books on page
function displayBooksOnPage(myLibrary) {
    const book = document.querySelector('.books')

    // looping over myLibrary array and displaying on card
    myLibrary.array.forEach((book) => {
        const card = document.createElement(div);
        card.classList.add('card');
        for (key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const paragraph = document.createElement('p')
            paragraph.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(paragraph)
        }
    });
}
