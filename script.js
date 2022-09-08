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


