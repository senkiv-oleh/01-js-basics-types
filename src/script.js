
/**
 * Task 1.1: Повернути довжину рядка.
 * @param {string} str
 * @returns {number} Example: "hello" -> 5
 */
function getStringLength(str) {
    return str.length;
}

/**
 * Task 1.2: Перевести рядок у верхній регістр (великі літери).
 * @param {string} str
 * @returns {string} Example: "hello" -> "HELLO"
 */
function toUpperCase(str) {
    return str.toUpperCase();
}

/**
 * Task 1.3: Очистити рядок від пробілів на початку та в кінці.
 * @param {string} str
 * @returns {string} Example: " hello " -> "hello"
 */
function trimString(str) {
    return str.trim();
}

/**
 * Task 1.4: Повернути останній символ рядка.
 * @param {string} str
 * @returns {string} Example: "JavaScript" -> "t"
 */
function getLastChar(str) {
    return str.length === 0 ? "" : str[str.length - 1];
}

/**
 * Task 1.5: Об'єднати два рядки через пробіл.
 */
function combineStrings(str1, str2) {
    return `${str1} ${str2}`;
}

/**
 * Task 1.6: Замінити перше входження слова у рядку.
 */
function replaceWord(str, target, replacement) {
    return str.replace(target, replacement);
}

/**
 * Task 1.7: Отримати частину рядка.
 */
function getSubstring(str, start, end) {
    return str.slice(start, end);
}

/**
 * Task 1.8: Повторити рядок вказану кількість разів.
 */
function repeatString(str, count) {
    return str.repeat(count);
}

/**
 * Task 1.9: Заповнити початок рядка символом '*'.
 */
function padStartWithAsterisk(str, targetLength) {
    return str.padStart(targetLength, "*");
}

/**
 * Task 1.10: Повернути тип даних.
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
 * Task 1.12: Перевірити, чи є значення NaN.
 */
function checkIsNaN(value) {
    return Number.isNaN(value);
}

/**
 * Task 1.13: Округлити число до вказаної кількості знаків після коми.
 */
function roundToDecimal(num, decimals) {
    const factor = 10 ** decimals;
    return Math.round(num * factor) / factor;
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
 * Task 1.16: Знайти остачу від ділення.
 */
function getRemainder(a, b) {
    return a % b;
}

/**
 * Task 1.17: Піднести число до степеня.
 */
function exponentiate(base, exponent) {
    return base ** exponent;
}

/**
 * Task 1.18: Перетворити значення у числа та повернути суму.
 */
function sumWithUnaryPlus(a, b) {
    return +a + +b;
}

/**
 * Task 1.19: Використати складені оператори.
 */
function applyCompoundOperators(num, addVal, multVal) {
    num += addVal;
    num *= multVal;
    return num;
}

/**
 * Task 1.20: Вивести привітання у консоль.
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
