// Task 1.1: довжина рядка
function getStringLength(str) {
  return str.length;
}

// Task 1.2: верхній регістр
function toUpperCase(str) {
  return str.toUpperCase();
}

// Task 1.3: прибрати пробіли на початку і в кінці
function trimString(str) {
  return str.trim();
}

// Task 1.4: останній символ (для порожнього рядка поверне '')
function getLastChar(str) {
  return str.slice(-1);
}

// Task 1.5: об'єднати два рядки через пробіл
function combineStrings(str1, str2) {
  return str1 + ' ' + str2;
}

// Task 1.6: замінити перше входження слова
function replaceWord(str, target, replacement) {
  return str.replace(target, replacement);
}

// Task 1.7: підрядок від start до end
function getSubstring(str, start, end) {
  return str.substring(start, end);
}

// Task 1.8: повторити рядок count разів
function repeatString(str, count) {
  return str.repeat(count);
}

// Task 1.9: доповнити початок символом '*' до targetLength
function padStartWithAsterisk(str, targetLength) {
  return str.padStart(targetLength, '*');
}

// Task 1.10: тип даних
function getType(value) {
  return typeof value;
}

// Task 1.11: рядок -> ціле число
function parseInteger(str) {
  return parseInt(str, 10);
}

// Task 1.12: чи значення строго NaN
function checkIsNaN(value) {
  return Number.isNaN(value);
}

// Task 1.13: округлення до decimals знаків (результат — число)
function roundToDecimal(num, decimals) {
  return Number(num.toFixed(decimals));
}

// Task 1.14: округлення вниз
function roundDown(num) {
  return Math.floor(num);
}

// Task 1.15: найбільше з трьох чисел
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Task 1.16: остача від ділення
function getRemainder(a, b) {
  return a % b;
}

// Task 1.17: піднесення до степеня
function exponentiate(base, exponent) {
  return base ** exponent;
}

// Task 1.18: сума через унарні плюси
function sumWithUnaryPlus(a, b) {
  return +a + +b;
}

// Task 1.19: += і *=
function applyCompoundOperators(num, addVal, multVal) {
  let result = num;
  result += addVal;
  result *= multVal;
  return result;
}

// Task 1.20: привітання в консоль
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
