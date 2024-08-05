/*Завдання 1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/

function square(width, height) {
  return width * height;
}
console.log(square(10, 5));

const squareRectangle = function (width, height) {
  return width * height;
};
console.log(squareRectangle(3, 8));

const sqRec = (width, height) => width * height;
console.log(sqRec(12, 24));
