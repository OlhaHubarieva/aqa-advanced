/*В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості 
та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу".
 Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про 
 екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook 
 та викличте метод printInfo*/

import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(title, author, year, file_type) {
    super(title, author, year);
    this._file_type = file_type;
  }
  printInfo() {
    console.log(
      `${this.title}, ${this.author}, ${this.year}, ${this._file_type}`
    );
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

  get file_type() {
    return this._file_type;
  }

  set file_type(value) {
    if (value !== "pdf") {
      console.log("This book is present only in pdf file");
      return;
    }
    this._file_type = value;
  }

  static fromBook(book, file_type) {
    return new EBook(book.title, book.author, book.year, file_type);
  }
}
