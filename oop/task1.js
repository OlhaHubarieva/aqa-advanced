/*Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book,
 який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo
  для кожного екземпляру.
В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась 
вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр)
 класу EBook та викличте метод printInfo
Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати
 валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу
 за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу 
як рядок ****та повертати екземпляр класу EBook*/

import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Чоловік на ім'я Уве", "Фредерік Бакман", 2012);
const book2 = new Book("Кувала зозуля", "Роберт Галбрейт", 2013);
const book3 = new Book("Вічне життя Смерті", "Лю Цисінь", 2010);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const eBook1 = new EBook("Нормальні люди", "Саллі Руні", 2018, "pdf");

eBook1.printInfo();

console.log(book1.title);
console.log(book2.author);
console.log(book3.year);

book3.year = 2005;

console.log(eBook1.file_type);

eBook1.file_type = "txt";

const books = [book1, book2, book3, eBook1];

const oldestBook = Book.findOldestBook(books);

if (oldestBook) {
  console.log("The oldest book is:");
  oldestBook.printInfo();
} else {
  console.log("The array of books is empty.");
}

const eBook2 = EBook.fromBook(book1, "fb2");
eBook2.printInfo();
