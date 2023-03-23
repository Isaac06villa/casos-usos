class Book {
    constructor(isbn, title, priceBuy, priceSell, quantity) {
      this.isbn = isbn;
      this.title = title;
      this.priceBuy = priceBuy;
      this.priceSell = priceSell;
      this.quantity = quantity;
      this.transactions = [];
    }
  }
  
  class Transaction {
    constructor(type, date, quantity) {
      this.type = type;
      this.date = date;
      this.quantity = quantity;
    }
  }
  
  class BookRepository {
    constructor() {
      this.books = [];
      this.cash = 1000000;
    }
  
    addBook(isbn, title, priceBuy, priceSell, quantity) {
      const book = new Book(isbn, title, priceBuy, priceSell, quantity);
      this.books.push(book);
    }
  
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }
  
    searchByTitle(title) {
      return this.books.filter(book => book.title === title);
    }
  
    searchByISBN(isbn) {
      return this.books.find(book => book.isbn === isbn);
    }
  
    supplyBooks(isbn, quantity) {
      const book = this.searchByISBN(isbn);
      if (book) {
        book.quantity += quantity;
        book.transactions.push(new Transaction('supply', new Date(), quantity));
      }
    }
  
    sellBooks(isbn, quantity) {
      const book = this.searchByISBN(isbn);
      if (book && book.quantity >= quantity) {
        book.quantity -= quantity;
        book.transactions.push(new Transaction('sale', new Date(), quantity));
        this.cash += quantity * book.priceSell;
      }
    }
  
    getSupplyTransactions(isbn) {
      const book = this.searchByISBN(isbn);
      if (book) {
        return book.transactions.filter(transaction => transaction.type === 'supply');
      }
      return [];
    }
  
    getMostExpensiveBook() {
      return this.books.reduce((mostExpensive, book) => {
        return book.priceSell > mostExpensive.priceSell ? book : mostExpensive;
      }, this.books[0]);
    }
  
    getCheapestBook() {
      return this.books.reduce((cheapest, book) => {
        return book.priceSell < cheapest.priceSell ? book : cheapest;
      }, this.books[0]);
    }
  
    getMostSoldBook() {
      return this.books.reduce((mostSold, book) => {
        return book.transactions.filter(transaction => transaction.type === 'sale').length >
          mostSold.transactions.filter(transaction => transaction.type === 'sale').length ? book : mostSold;
      }, this.books[0]);
    }
  }
  