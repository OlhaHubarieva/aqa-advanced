/*Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.*/

export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  printInfo() {
    console.log(`${this._title}, ${this._author}, ${this._year}`);
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (value < 2010) {
      console.log("This book is not reprinted anymore");
      return;
    }
    this._year = value;
  }

  static findOldestBook(books) {
    if (books.length === 0) {
      return null;
    }
    let oldestBook = books[0];
    for (let book of books) {
      if (book.year < oldestBook.year) {
        oldestBook = book;
      }
    }
    return oldestBook;
  }
}
