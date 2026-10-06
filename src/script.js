/**
 * Task 1.1: Повернути тип значення (використовуючи typeof).
 */
function getType(value) {
  return typeof value;
}

/**
 * Task 1.2: Перевірити, чи є значення строго null або undefined.
 */
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

/**
 * Task 1.3: Перетворити значення в число. Повернути NaN, якщо перетворення неможливе.
 */
function convertToNumber(value) {
  return Number(value);
}

/**
 * Task 1.4: Перевірити, чи є значення саме NaN (використовуйте безпечну перевірку Number.isNaN).
 */
function isNaNValue(value) {
  return Number.isNaN(value);
}

/**
 * Task 1.5: Додати два значення, попередньо перетворивши їх на числа.
 */
function safeAdd(a, b) {
  return Number(a) + Number(b);
}

/**
 * Task 1.6: Зробити першу літеру заданого рядка великою.
 */
function capitalizeWord(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Task 1.7: Перевірити, чи містить рядок підрядок без урахування регістру.
 */
function containsIgnoreCase(str, target) {
  return str.toLowerCase().includes(target.toLowerCase());
}

/**
 * Task 1.8: Округлити число до вказаної кількості знаків після коми.
 */
function roundToDecimal(num, decimals) {
return Number(Math.round(Number(num + 'e' + decimals)) + 'e-' + decimals);}

/**
 * Task 1.9: Перевірити, чи є рік високосним.
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Task 1.10: Перевірити валідність пароля (принаймні 8 символів І хоча б одна цифра).
 */
function isValidPassword(password) {
  return password.length >= 8 && /\d/.test(password);
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