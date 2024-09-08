/*Завдання 2

В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

Copy code
<https://jsonplaceholder.typicode.com/todos/1>

Функція повинна повертати як результат Promise що повертає об’єкт todo

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

Copy code
<https://jsonplaceholder.typicode.com/users/1>

Функція повинна повертати як результат Promise що повертає об’єкт user

Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
 Присвойте значення отримані від цих виразів до змінних*/

function fetchToDo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });
}

const promiseAll = Promise.all([fetchToDo(), fetchUser()])
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((error) => {
    console.error("Сталася помилка в Promise.all:", error);
  });

const promiseRace = Promise.race([fetchToDo(), fetchUser()])
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((error) => {
    console.error("Сталася помилка в Promise.race:", error);
  });
