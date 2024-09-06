/*Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі*/

const users = [
  { name: "Olha", email: "olha@gmail.com", age: 25 },
  { name: "Ivan", email: "ivan@gmail.com", age: 20 },
  { name: "Alisa", email: "alisa@gmail.com", age: 18 },
];

for (const user of users) {
  console.log(
    `User ${user.name} is ${user.age} years old and has ${user.email} email address`
  );
}

for (const { name, email, age } of users) {
  console.log(
    `User ${name} is ${age} years old and has ${email} email address`
  );
}
