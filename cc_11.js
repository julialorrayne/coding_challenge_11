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





