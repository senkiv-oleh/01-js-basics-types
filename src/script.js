/**
 * Task 1.1: Повернути тип значення (використовуючи typeof).
 * @param {*} value
 * @returns {string} (наприклад, 'number', 'string', 'boolean', 'object', 'undefined')
 */
function getType(value) {
  // TODO: Implement function
}

/**
 * Task 1.2: Перевірити, чи є значення строго null або undefined.
 * @param {*} value
 * @returns {boolean}
 */
function isNullOrUndefined(value) {
  // TODO: Implement function
}

/**
 * Task 1.3: Перетворити значення в число. Повернути NaN, якщо перетворення неможливе.
 * @param {*} value
 * @returns {number}
 */
function convertToNumber(value) {
  // TODO: Implement function
}

/**
 * Task 1.4: Перевірити, чи є значення саме NaN (використовуйте безпечну перевірку Number.isNaN).
 * @param {*} value
 * @returns {boolean}
 */
function isNaNValue(value) {
  // TODO: Implement function
}

/**
 * Task 1.5: Додати два значення, попередньо перетворивши їх на числа. Повернути NaN, якщо хоча б одне з них некоректне.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function safeAdd(a, b) {
  // TODO: Implement function
}

/**
 * Task 1.6: Зробити першу літеру заданого рядка великою.
 * @param {string} str
 * @returns {string} Приклад: "hello" -> "Hello", "" -> ""
 */
function capitalizeWord(str) {
  // TODO: Implement function
}

/**
 * Task 1.7: Перевірити, чи містить рядок підрядок без урахування регістру.
 * @param {string} str
 * @param {string} target
 * @returns {boolean} Приклад: ("Hello World", "world") -> true
 */
function containsIgnoreCase(str, target) {
  // TODO: Implement function
}

/**
 * Task 1.8: Округлити число до вказаної кількості знаків після коми.
 * @param {number} num
 * @param {number} decimals
 * @returns {number} Приклад: (3.14159, 2) -> 3.14
 */
function roundToDecimal(num, decimals) {
  // TODO: Implement function
}

/**
 * Task 1.9: Перевірити, чи є рік високосним.
 * Рік є високосним, якщо ділиться на 4, за винятком років століття (діляться на 100), які повинні ділитися на 400.
 * @param {number} year
 * @returns {boolean} Приклад: 2000 -> true, 1900 -> false, 2024 -> true
 */
function isLeapYear(year) {
  // TODO: Implement function
}

/**
 * Task 1.10: Перевірити валидність пароля (принаймні 8 символів І хоча б одна цифра).
 * @param {string} password
 * @returns {boolean}
 */
function isValidPassword(password) {
  // TODO: Implement function
}

module.exports = {
  getType,
  isNullOrUndefined,
  convertToNumber,
  isNaNValue,
  safeAdd,
  capitalizeWord,
  containsIgnoreCase,
  roundToDecimal,
  isLeapYear,
  isValidPassword
};