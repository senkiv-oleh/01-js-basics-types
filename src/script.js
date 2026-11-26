/**
 * Task 1.1: Повернути довжину рядка.
 */
function getStringLength(str) {
  return str.length;
}

/**
 * Task 1.2: Перевести рядок у верхній регістр.
 */
function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Task 1.3: Очистити рядок від пробілів на початку та в кінці.
 */
function trimString(str) {
  return str.trim();
}

/**
 * Task 1.4: Повернути останній символ рядка.
 */
function getLastChar(str) {
  return str.charAt(str.length - 1);
}

/**
 * Task 1.5: Об'єднати два рядки через пробіл.
 */
function combineStrings(str1, str2) {
  return str1 + " " + str2;
}

/**
 * Task 1.6: Замінити перше входження слова у рядку на інше слово.
 */
function replaceWord(str, target, replacement) {
  return str.replace(target, () => replacement);
}

/**
 * Task 1.7: Отримати підрядок від start до end.
 */
function getSubstring(str, start, end) {
  return str.substring(start, end);
}

/**
 * Task 1.8: Повторити рядок count разів.
 */
function repeatString(str, count) {
  return str.repeat(count);
}

/**
 * Task 1.9: Заповнити початок рядка символом '*' до вказаної довжини.
 */
function padStartWithAsterisk(str, targetLength) {
  return str.padStart(targetLength, "*");
}

/**
 * Task 1.10: Повернути тип даних значення.
 */
function getType(value) {
  return typeof value;
}

/**
 * Task 1.11: Перетворити рядок у ціле число.
 */
function parseInteger(str) {
  return parseInt(str, 10);
}

/**
 * Task 1.12: Перевірити, чи значення строго NaN.
 */
function checkIsNaN(value) {
  return Number.isNaN(value);
}

/**
 * Task 1.13: Округлити число до вказаної кількості знаків після коми.
 */
function roundToDecimal(num, decimals) {
  return Number(num.toFixed(decimals));
}

/**
 * Task 1.14: Округлити число до меншого цілого.
 */
function roundDown(num) {
  return Math.floor(num);
}

/**
 * Task 1.15: Знайти найбільше серед трьох чисел.
 */
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

/**
 * Task 1.16: Остача від ділення a на b.
 */
function getRemainder(a, b) {
  return a % b;
}

/**
 * Task 1.17: Піднести base до степеня exponent.
 */
function exponentiate(base, exponent) {
  return base ** exponent;
}

/**
 * Task 1.18: Сума двох значень, перетворених на числа унарним плюсом.
 */
function sumWithUnaryPlus(a, b) {
  return +a + +b;
}

/**
 * Task 1.19: Додати addVal (+=), помножити на multVal (*=).
 */
function applyCompoundOperators(num, addVal, multVal) {
  let result = num;
  result += addVal;
  result *= multVal;
  return result;
}

/**
 * Task 1.20: Вивести в консоль "Hello, <name>!".
 */
function logGreeting(name) {
  console.log(`Hello, ${name}!`);
}

module.exports = {
  getStringLength,
  toUpperCase,
  trimString,
  getLastChar,
  combineStrings,
  replaceWord,
  getSubstring,
  repeatString,
  padStartWithAsterisk,
  getType,
  parseInteger,
  checkIsNaN,
  roundToDecimal,
  roundDown,
  findMax,
  getRemainder,
  exponentiate,
  sumWithUnaryPlus,
  applyCompoundOperators,
  logGreeting
};
