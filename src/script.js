
function getStringLength(str) {
  return str.length;
}


function toUpperCase(str) {
  return str.toUpperCase();
}


function trimString(str) {
  return str.trim();
}


function getLastChar(str) {
  return str.at(-1);
}


function combineStrings(str1, str2) {
  return `${str1} ${str2}`;
}


function replaceWord(str, target, replacement) {
  return str.replace(target, replacement);
}


function getSubstring(str, start, end) {
  return str.substring(start, end);
}

function repeatString(str, count) {
  return str.repeat(count);
}


function padStartWithAsterisk(str, targetLength) {
  return str.padStart(targetLength, '*');
}


function getType(value) {
  return typeof value;
}


function parseInteger(str) {
  return parseInt(str, 10);
}


function checkIsNaN(value) {
  return Number.isNaN(value);
}


function roundToDecimal(num, decimals) {
  return Number(num.toFixed(decimals));
}


function roundDown(num) {
  return Math.floor(num);
}


function findMax(a, b, c) {
  return Math.max(a, b, c);
}


function getRemainder(a, b) {
  return a % b;
}


function exponentiate(base, exponent) {
  return base ** exponent;
}


function sumWithUnaryPlus(a, b) {
  return +a + +b;
}


function applyCompoundOperators(num, addVal, multVal) {
  let result = num;
  result += addVal;
  result *= multVal;
  return result;
}


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
}