//Task 1: Creating a Book Class
class Book {     //// Created a class Book with properties title, author, isbn,copies
    constructor(title, author,isbn,copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails(){ //Added a method getDetails() that returns the book details.
        return `Title: ${this.title}, author: ${this.author}, isbn: ${this.isbn}, copies: ${this.copies}`;
    }
    updateCopies(quantity){  //// Added a method updateCopies(quantity) that modifies the available copies when a book is borrowed or returned.
        this.copies += quantity;
    }
};

//Task 2: Creating a Borrower Class
class Borrower {  //Created a class Borrower 
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBook = [];
    }
    borrowBook(book) {
        this.borrowedBook.push(book);
    } // Added a method borrowBook(book) that adds a book title to borrowedBooks.
    returnBook(book){
        const index = this.borrowedBook.indexOf(book);
        if(index !== -1){
            this.borrowedBook.splice(index, 1);
        }  // Added a method returnBook(book) that removes the book from borrowedBooks.
    }
};

//Task 3: Creating a Library Class
class Library {  //Created a class Library
    constructor(){
        this.books = [];
        this.borrowers = [];
    }
    addBook(book){  //added method addBook(book): Adds a new book to the library
        this.books.push(book);
    }
    listBooks(){  //method listBooks(): Logs all books' details
        this.books.forEach(book => console.log(book.getDetails()));
    }
    lendBook(borrowerId,isbn){ //Task 4: Implementing Book Borrowing
        const book = this.books.find(book => book.isbn ===isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        if(!book){
            console.log(`The book with isbn ${isbn} was not found`);
            return;
        }  //Added a method lendBook(borrowerId, isbn) in the Library class
        if(!borrower){
            console.log(`The borrower with id ${borrowerId} was not found`);
            return;
        }
        if (book.copies > 0) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
            console.log(`The book ${book.title} was borrowed by ${borrower.name}`);
        }
        else {
            console.log(`Unfortunately, the book ${book.title} is not available`)
        } 
    }
    returnBook(borrowerId, isbn){  //Added a method returnBook(borrowerId, isbn) in the Library class
        const book = this.books.find(b => b.isbn ===isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if(!book){
            console.log(`Book with isbn ${isbn} was not found`);
            return;
        }
        if(!borrower){
            console.log(`Borrower with id ${borrowerId} was not found`);
            return;
        }
        book.updateCopies(1);
        borrower.returnBook(book.title);
    }
};



//Task 5: Implementing Book Returns
//Add a method returnBook(borrowerId, isbn) in the
//  Library class:
// Increases the book’s available copies.
// Removes the book from the borrower’s borrowed list.
//test:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBook);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBook);
// Expected output: []


//test:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//test:
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//test:
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBook);
// Expected output: ["The Great Gatsby"]

//test:
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBook);
// Expected output: []