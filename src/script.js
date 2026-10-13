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
 * Task 1.3: Перевести рядок у нижній регістр (малі літери).
 * @param {string} str
 * @returns {string} Example: "HELLO" -> "hello"
 */
function toLowerCase(str) {
  // TODO: Implement function
}

/**
 * Task 1.4: Очистити рядок від пробілів на початку та в кінці.
 * @param {string} str
 * @returns {string} Example: "  hello  " -> "hello"
 */
function trimString(str) {
  // TODO: Implement function
}

/**
 * Task 1.5: Повернути перший символ рядка.
 * @param {string} str
 * @returns {string} Example: "JavaScript" -> "J"
 */
function getFirstChar(str) {
  // TODO: Implement function
}

/**
 * Task 1.6: Повернути останній символ рядка.
 * @param {string} str
 * @returns {string} Example: "JavaScript" -> "t"
 */
function getLastChar(str) {
  // TODO: Implement function
}

/**
 * Task 1.7: Об'єднати (конкатенувати) два рядки через пробіл.
 * @param {string} str1
 * @param {string} str2
 * @returns {string} Example: ("Hello", "World") -> "Hello World"
 */
function combineStrings(str1, str2) {
  // TODO: Implement function
}

/**
 * Task 1.8: Замінити перше входження слова у рядку на інше слово.
 * @param {string} str
 * @param {string} target
 * @param {string} replacement
 * @returns {string} Example: ("I like apples", "apples", "oranges") -> "I like oranges"
 */
function replaceWord(str, target, replacement) {
  // TODO: Implement function
}

/**
 * Task 1.9: Отримати частину рядка (підрядок) за вказаними індексами (від start до end).
 * @param {string} str
 * @param {number} start
 * @param {number} end
 * @returns {string} Example: ("JavaScript", 0, 4) -> "Java"
 */
function getSubstring(str, start, end) {
  // TODO: Implement function
}

/**
 * Task 1.10: Повторити рядок вказану кількість разів.
 * @param {string} str
 * @param {number} count
 * @returns {string} Example: ("abc", 3) -> "abcabcabc"
 */
function repeatString(str, count) {
  // TODO: Implement function
}

/**
 * Task 1.11: Заповнити початок рядка символом '*' до вказаної довжини.
 * @param {string} str
 * @param {number} targetLength
 * @returns {string} Example: ("5678", 8) -> "****5678"
 */
function padStartWithAsterisk(str, targetLength) {
  // TODO: Implement function
}

/**
 * Task 1.12: Округлити число до вказаної кількості знаків після коми (значення має бути числом).
 * @param {number} num
 * @param {number} decimals
 * @returns {number} Example: (3.14159, 2) -> 3.14
 */
function roundToDecimal(num, decimals) {
  // TODO: Implement function
}

/**
 * Task 1.13: Знайти модуль (абсолютне значення) числа.
 * @param {number} num
 * @returns {number} Example: -5 -> 5
 */
function getAbsoluteValue(num) {
  // TODO: Implement function
}

/**
 * Task 1.14: Піднести число до вказаного степеня.
 * @param {number} base
 * @param {number} exponent
 * @returns {number} Example: (2, 3) -> 8
 */
function powerOf(base, exponent) {
  // TODO: Implement function
}

/**
 * Task 1.15: Знайти квадратний корінь числа.
 * @param {number} num
 * @returns {number} Example: 16 -> 4
 */
function getSquareRoot(num) {
  // TODO: Implement function
}

module.exports = {
  getStringLength,
  toUpperCase,
  toLowerCase,
  trimString,
  getFirstChar,
  getLastChar,
  combineStrings,
  replaceWord,
  getSubstring,
  repeatString,
  padStartWithAsterisk,
  roundToDecimal,
  getAbsoluteValue,
  powerOf,
  getSquareRoot
};