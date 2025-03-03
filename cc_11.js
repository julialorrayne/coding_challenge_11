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

//test:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

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

//test:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBook);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBook);
// Expected output: []










