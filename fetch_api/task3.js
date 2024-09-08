/*Завдання 3

Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити*/

async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("An error occurred while fetching todo:", error);
    throw error;
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("An error occurred while fetching user:", error);
    throw error;
  }
}

async function fetchAllData() {
  try {
    const results = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Promise.all results:", results);
    return results;
  } catch (error) {
    console.error("An error occurred in Promise.all:", error);
  }
}

fetchAllData();

async function fetchRaceData() {
  try {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race result:", result);
    return result;
  } catch (error) {
    console.error("An error occurred in Promise.race:", error);
  }
}

fetchRaceData();
