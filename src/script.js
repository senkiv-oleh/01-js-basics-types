/**
 * Task 1.1: Повернути довжину рядка.
 * @param {string} str
 * @returns {number} Example: "hello" -> 5
 */
function getStringLength(str) {
  // TODO: Implement function
}

/**
 * Task 1.2: Перевести рядок у верхній регістр (великі літери).
 * @param {string} str
 * @returns {string} Example: "hello" -> "HELLO"
 */
function toUpperCase(str) {
  // TODO: Implement function
}

/**
 * Task 1.3: Очистити рядок від пробілів на початку та в кінці.
 * @param {string} str
 * @returns {string} Example: " hello " -> "hello"
 */
function trimString(str) {
  // TODO: Implement function
}

/**
 * Task 1.4: Повернути останній символ рядка.
 * @param {string} str
 * @returns {string} Example: "JavaScript" -> "t"
 */
function getLastChar(str) {
  // TODO: Implement function
}

/**
 * Task 1.5: Об'єднати (конкатенувати) два рядки через пробіл.
 * @param {string} str1
 * @param {string} str2
 * @returns {string} Example: ("Hello", "World") -> "Hello World"
 */
function combineStrings(str1, str2) {
  // TODO: Implement function
}

/**
 * Task 1.6: Замінити перше входження слова у рядку на інше слово.
 * @param {string} str
 * @param {string} target
 * @param {string} replacement
 * @returns {string} Example: ("I like apples", "apples", "oranges") -> "I like oranges"
 */
function replaceWord(str, target, replacement) {
  // TODO: Implement function
}

/**
 * Task 1.7: Отримати частину рядка (підрядок) за вказаними індексами (від start до end).
 * @param {string} str
 * @param {number} start
 * @param {number} end
 * @returns {string} Example: ("JavaScript", 0, 4) -> "Java"
 */
function getSubstring(str, start, end) {
  // TODO: Implement function
}

/**
 * Task 1.8: Повторити рядок вказану кількість разів.
 * @param {string} str
 * @param {number} count
 * @returns {string} Example: ("abc", 3) -> "abcabcabc"
 */
function repeatString(str, count) {
  // TODO: Implement function
}

/**
 * Task 1.9: Заповнити початок рядка символом '*' до вказаної довжини.
 * @param {string} str
 * @param {number} targetLength
 * @returns {string} Example: ("5678", 8) -> "****5678"
 */
function padStartWithAsterisk(str, targetLength) {
  // TODO: Implement function
}

/**
 * Task 1.10: Повернути тип даних переданого значення (за допомогою typeof).
 * @param {any} value
 * @returns {string} Example: "hello" -> "string", 42 -> "number"
 */
function getType(value) {
  // TODO: Implement function
}

/**
 * Task 1.11: Перетворити рядок у ціле число (parseInt).
 * @param {string} str
 * @returns {number} Example: "42px" -> 42, "100" -> 100
 */
function parseInteger(str) {
  // TODO: Implement function
}

/**
 * Task 1.12: Перевірити, чи є значення строго NaN (Number.isNaN).
 * @param {any} value
 * @returns {boolean} Example: NaN -> true, "abc" -> false, 123 -> false
 */
function checkIsNaN(value) {
  // TODO: Implement function
}

/**
 * Task 1.13: Округлити число до вказаної кількості знаків після коми (результат має бути числом).
 * @param {number} num
 * @param {number} decimals
 * @returns {number} Example: (3.14159, 2) -> 3.14
 */
function roundToDecimal(num, decimals) {
  // TODO: Implement function
}

/**
 * Task 1.14: Округлити число до меншого цілого (Math.floor).
 * @param {number} num
 * @returns {number} Example: 3.7 -> 3, -3.2 -> -4
 */
function roundDown(num) {
  // TODO: Implement function
}

/**
 * Task 1.15: Знайти найбільше серед трьох чисел (Math.max).
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number} Example: (5, 12, 3) -> 12
 */
function findMax(a, b, c) {
  // TODO: Implement function
}

/**
 * Task 1.16: Знайти остачу від ділення a на b за допомогою оператора %.
 * @param {number} a
 * @param {number} b
 * @returns {number} Example: (5, 2) -> 1, (8, 3) -> 2
 */
function getRemainder(a, b) {
  // TODO: Implement function
}

/**
 * Task 1.17: Піднести base до степеня exponent за допомогою оператора **.
 * @param {number} base
 * @param {number} exponent
 * @returns {number} Example: (2, 3) -> 8, (4, 0.5) -> 2
 */
function exponentiate(base, exponent) {
  // TODO: Implement function
}

/**
 * Task 1.18: Перетворити два значення у числа за допомогою унарних плюсів та повернути їх суму (+a + +b).
 * @param {any} a
 * @param {any} b
 * @returns {number} Example: ("2", "3") -> 5, ("10", 5) -> 15
 */
function sumWithUnaryPlus(a, b) {
  // TODO: Implement function
}

/**
 * Task 1.19: Створити змінну із значенням num, додати addVal (+=), помножити на multVal (*=) і повернути результат.
 * @param {number} num
 * @param {number} addVal
 * @param {number} multVal
 * @returns {number} Example: (2, 5, 2) -> 14
 */
function applyCompoundOperators(num, addVal, multVal) {
  // TODO: Implement function
}

/**
 * Task 1.20: Вивести в консоль (console.log) привітання у форматі "Hello, <name>!".
 * @param {string} name
 * @returns {void} Example: "Alex" -> console.log("Hello, Alex!")
 */
function logGreeting(name) {
  // TODO: Implement function
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
