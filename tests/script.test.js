const {
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
  isNullOrUndefined,
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
} = require('../src/script');

describe('Task 1: Top 20 JS Basics Tasks', () => {

  describe('1.1 getStringLength()', () => {
    test('returns correct length for string "hello"', () => {
      expect(getStringLength('hello')).toBe(5);
    });
    test('returns length 0 for empty string', () => {
      expect(getStringLength('')).toBe(0);
    });
    test('counts spaces in string', () => {
      expect(getStringLength('  ')).toBe(2);
    });
  });

  describe('1.2 toUpperCase()', () => {
    test('converts lowercase string "hello" to "HELLO"', () => {
      expect(toUpperCase('hello')).toBe('HELLO');
    });
    test('converts mixed case "JavaScript" to "JAVASCRIPT"', () => {
      expect(toUpperCase('JavaScript')).toBe('JAVASCRIPT');
    });
  });

  describe('1.3 trimString()', () => {
    test('removes leading and trailing spaces', () => {
      expect(trimString('  hello world  ')).toBe('hello world');
    });
    test('returns empty string when input is only spaces', () => {
      expect(trimString('   ')).toBe('');
    });
  });

  describe('1.4 getLastChar()', () => {
    test('returns last char "t" from "JavaScript"', () => {
      expect(getLastChar('JavaScript')).toBe('t');
    });
    test('returns empty string for empty input', () => {
      expect(getLastChar('')).toBe('');
    });
  });

  describe('1.5 combineStrings()', () => {
    test('combines "Hello" and "World" with a space', () => {
      expect(combineStrings('Hello', 'World')).toBe('Hello World');
    });
  });

  describe('1.6 replaceWord()', () => {
    test('replaces "apples" with "oranges"', () => {
      expect(replaceWord('I like apples', 'apples', 'oranges')).toBe('I like oranges');
    });
  });

  describe('1.7 getSubstring()', () => {
    test('extracts substring from index 0 to 4', () => {
      expect(getSubstring('JavaScript', 0, 4)).toBe('Java');
    });
  });

  describe('1.8 repeatString()', () => {
    test('repeats "abc" 3 times', () => {
      expect(repeatString('abc', 3)).toBe('abcabcabc');
    });
    test('returns empty string when count is 0', () => {
      expect(repeatString('test', 0)).toBe('');
    });
  });

  describe('1.9 padStartWithAsterisk()', () => {
    test('pads "5678" with asterisks up to length 8', () => {
      expect(padStartWithAsterisk('5678', 8)).toBe('****5678');
    });
  });

  describe('1.10 getType()', () => {
    test('returns "string" for string input', () => {
      expect(getType('hello')).toBe('string');
    });
    test('returns "number" for number input', () => {
      expect(getType(42)).toBe('number');
    });
    test('returns "boolean" for boolean input', () => {
      expect(getType(true)).toBe('boolean');
    });
  });

  describe('1.11 parseInteger()', () => {
    test('parses "42px" to integer 42', () => {
      expect(parseInteger('42px')).toBe(42);
    });
    test('returns NaN for non-numeric string "abc"', () => {
      expect(parseInteger('abc')).toBeNaN();
    });
  });

  describe('1.12 checkIsNaN()', () => {
    test('returns true for NaN value', () => {
      expect(checkIsNaN(NaN)).toBe(true);
    });
    test('returns false for string "abc"', () => {
      expect(checkIsNaN('abc')).toBe(false);
    });
    test('returns false for valid number 123', () => {
      expect(checkIsNaN(123)).toBe(false);
    });
  });

  describe('1.13 roundToDecimal()', () => {
    test('rounds 3.14159 to 2 decimal places as number', () => {
      expect(roundToDecimal(3.14159, 2)).toBe(3.14);
    });
  });

  describe('1.14 roundDown()', () => {
    test('rounds positive float down to nearest integer (3.7 -> 3)', () => {
      expect(roundDown(3.7)).toBe(3);
    });
    test('rounds negative float down to lower integer (-3.2 -> -4)', () => {
      expect(roundDown(-3.2)).toBe(-4);
    });
  });

  describe('1.15 findMax()', () => {
    test('finds maximum among (5, 12, 3)', () => {
      expect(findMax(5, 12, 3)).toBe(12);
    });
    test('works with negative numbers (-10, -5, -20)', () => {
      expect(findMax(-10, -5, -20)).toBe(-5);
    });
  });

  describe('1.16 getRemainder()', () => {
    test('calculates remainder 5 % 2 to be 1', () => {
      expect(getRemainder(5, 2)).toBe(1);
    });
    test('calculates remainder 8 % 3 to be 2', () => {
      expect(getRemainder(8, 3)).toBe(2);
    });
  });

  describe('1.17 exponentiate()', () => {
    test('calculates 2 ** 3 to be 8', () => {
      expect(exponentiate(2, 3)).toBe(8);
    });
    test('calculates fractional power 4 ** 0.5 to be 2', () => {
      expect(exponentiate(4, 0.5)).toBe(2);
    });
  });

  describe('1.18 sumWithUnaryPlus()', () => {
    test('sums numeric strings "2" and "3" as numbers (returns 5)', () => {
      expect(sumWithUnaryPlus('2', '3')).toBe(5);
    });
    test('sums string "10" and number 5 to get 15', () => {
      expect(sumWithUnaryPlus('10', 5)).toBe(15);
    });
  });

  describe('1.79 applyCompoundOperators()', () => {
    test('applies += and *= correctly for (2, 5, 2) -> 14', () => {
      expect(applyCompoundOperators(2, 5, 2)).toBe(14);
    });
    test('applies += and *= correctly for (0, 10, 3) -> 30', () => {
      expect(applyCompoundOperators(0, 10, 3)).toBe(30);
    });
  });

  describe('1.20 logGreeting()', () => {
    test('calls console.log with formatted greeting "Hello, Alex!"', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      logGreeting('Alex');
      expect(consoleSpy).toHaveBeenCalledWith('Hello, Alex!');
      consoleSpy.mockRestore();
    });

    test('works with empty string name', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      logGreeting('');
      expect(consoleSpy).toHaveBeenCalledWith('Hello, !');
      consoleSpy.mockRestore();
    });
  });
});
