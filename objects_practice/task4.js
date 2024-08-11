/*Завдання 4
Створіть об'єкт person з такими властивостями:
firstName: рядок, представляє ім'я особи.
lastName: рядок, представляє прізвище особи.
age: число, представляє вік особи.
Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
Видаліть властивість age з об'єкта person.
Виведіть оновлений об'єкт person в консоль.*/

const person = {
  firstName: "Alice",
  lastName: "Doe",
  age: 10,
};

person.email = "alice@gmail.com";

delete person.age;

console.log(person);
