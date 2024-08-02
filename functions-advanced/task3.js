/*Завдання 3

Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.*/


function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва аргументи мають бути числами");
  }
  if (denominator === 0) {
    throw new Error("Знаменник не може дорівнювати нулю");
  }
  return numerator / denominator;
}
try {
  const result = divide(10, 2);
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Помилка: ${error.message}`);
} finally {
  console.log("Робота завершена");
}
try {
  const result = divide(10, 0);
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Помилка: ${error.message}`);
} finally {
  console.log("Робота завершена");
}
try {
  const result = divide(6, "a");
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Помилка: ${error.message}`);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide("A", 3);
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Помилка: ${error.message}`);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide(15, 3);
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Помилка: ${error.message}`);
} finally {
  console.log("Робота завершена");
}
