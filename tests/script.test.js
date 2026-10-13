const {
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
} = require('../src/script');

describe('Task 1: Strings and Numbers', () => {
    describe('1.1 getStringLength()', () => {
        test('returns correct length for various strings', () => {
            expect(getStringLength('hello')).toBe(5);
            expect(getStringLength('')).toBe(0);
            expect(getStringLength('  ')).toBe(2);
            expect(getStringLength('JavaScript is awesome!')).toBe(22);
            expect(getStringLength('1234567890')).toBe(10);
        });
    });

    describe('1.2 toUpperCase()', () => {
        test('converts strings to uppercase', () => {
            expect(toUpperCase('hello')).toBe('HELLO');
            expect(toUpperCase('JavaScript')).toBe('JAVASCRIPT');
            expect(toUpperCase('123 abc!')).toBe('123 ABC!');
            expect(toUpperCase('')).toBe('');
            expect(toUpperCase('already UPPER')).toBe('ALREADY UPPER');
        });
    });

    describe('1.3 toLowerCase()', () => {
        test('converts strings to lowercase', () => {
            expect(toLowerCase('HELLO')).toBe('hello');
            expect(toLowerCase('React.js')).toBe('react.js');
            expect(toLowerCase('XYZ 123')).toBe('xyz 123');
            expect(toLowerCase('')).toBe('');
            expect(toLowerCase('already lower')).toBe('already lower');
        });
    });

    describe('1.4 trimString()', () => {
        test('trims spaces from both sides without affecting middle spaces', () => {
            expect(trimString('  hello world  ')).toBe('hello world');
            expect(trimString('   frontend   ')).toBe('frontend');
            expect(trimString('no spaces')).toBe('no spaces');
            expect(trimString('   ')).toBe('');
            expect(trimString('\t code \n')).toBe('code');
        });
    });

    describe('1.5 getFirstChar()', () => {
        test('returns the first character of different strings', () => {
            expect(getFirstChar('JavaScript')).toBe('J');
            expect(getFirstChar('hello')).toBe('h');
            expect(getFirstChar('123')).toBe('1');
            expect(getFirstChar(' спецсимвол')).toBe(' ');
            expect(getFirstChar('')).toBe('');
        });
    });

    describe('1.6 getLastChar()', () => {
        test('returns the last character of different strings', () => {
            expect(getLastChar('JavaScript')).toBe('t');
            expect(getLastChar('hello')).toBe('o');
            expect(getLastChar('abc!')).toBe('!');
            expect(getLastChar('space ')).toBe(' ');
            expect(getLastChar('')).toBe('');
        });
    });

    describe('1.7 combineStrings()', () => {
        test('joins two strings with a single space', () => {
            expect(combineStrings('Hello', 'World')).toBe('Hello World');
            expect(combineStrings('Frontend', 'Developer')).toBe('Frontend Developer');
            expect(combineStrings('', 'test')).toBe(' test');
            expect(combineStrings('a', 'b')).toBe('a b');
            expect(combineStrings('123', '456')).toBe('123 456');
        });
    });

    describe('1.8 replaceWord()', () => {
        test('replaces only the first matching word in string', () => {
            expect(replaceWord('I like apples', 'apples', 'oranges')).toBe('I like oranges');
            expect(replaceWord('cat and cat', 'cat', 'dog')).toBe('dog and cat');
            expect(replaceWord('hello world', 'world', 'there')).toBe('hello there');
            expect(replaceWord('123 456 789', '456', '000')).toBe('123 000 789');
        });
    });

    describe('1.9 getSubstring()', () => {
        test('extracts correct range of characters', () => {
            expect(getSubstring('JavaScript', 0, 4)).toBe('Java');
            expect(getSubstring('Frontend', 4, 8)).toBe('end');
            expect(getSubstring('Hello World', 6, 11)).toBe('World');
            expect(getSubstring('testing', 1, 4)).toBe('est');
        });
    });

    describe('1.10 repeatString()', () => {
        test('repeats string exact specified number of times', () => {
            expect(repeatString('abc', 3)).toBe('abcabcabc');
            expect(repeatString('x', 5)).toBe('xxxxx');
            expect(repeatString('code', 1)).toBe('code');
            expect(repeatString('test', 0)).toBe('');
            expect(repeatString('-', 4)).toBe('----');
        });
    });

    describe('1.11 padStartWithAsterisk()', () => {
        test('pads string start to correct target length', () => {
            expect(padStartWithAsterisk('5678', 8)).toBe('****5678');
            expect(padStartWithAsterisk('1', 4)).toBe('***1');
            expect(padStartWithAsterisk('12345678', 8)).toBe('12345678');
            expect(padStartWithAsterisk('hello', 10)).toBe('*****hello');
            expect(padStartWithAsterisk('test', 2)).toBe('test');
        });
    });

    describe('1.12 roundToDecimal()', () => {
        test('handles various rounding scenarios and float issues', () => {
            expect(roundToDecimal(3.14159, 2)).toBe(3.14);
            expect(roundToDecimal(1.005, 2)).toBe(1.01);
            expect(roundToDecimal(10.5678, 3)).toBe(10.568);
            expect(roundToDecimal(42, 2)).toBe(42);
            expect(roundToDecimal(9.999, 1)).toBe(10);
            expect(roundToDecimal(0.12345, 4)).toBe(0.1235);
        });
    });

    describe('1.13 getAbsoluteValue()', () => {
        test('returns absolute values for negative and positive numbers', () => {
            expect(getAbsoluteValue(-5)).toBe(5);
            expect(getAbsoluteValue(10)).toBe(10);
            expect(getAbsoluteValue(-100.5)).toBe(100.5);
            expect(getAbsoluteValue(0)).toBe(0);
            expect(getAbsoluteValue(-0.001)).toBe(0.001);
        });
    });

    describe('1.14 powerOf()', () => {
        test('calculates exponentiation correctly', () => {
            expect(powerOf(2, 3)).toBe(8);
            expect(powerOf(5, 2)).toBe(25);
            expect(powerOf(10, 0)).toBe(1);
            expect(powerOf(3, 4)).toBe(81);
            expect(powerOf(2, -1)).toBe(0.5);
            expect(powerOf(7, 1)).toBe(7);
        });
    });

    describe('1.15 getSquareRoot()', () => {
        test('calculates square root for integers and decimals', () => {
            expect(getSquareRoot(16)).toBe(4);
            expect(getSquareRoot(81)).toBe(9);
            expect(getSquareRoot(0)).toBe(0);
            expect(getSquareRoot(2.25)).toBe(1.5);
            expect(getSquareRoot(144)).toBe(12);
            expect(getSquareRoot(1)).toBe(1);
        });
    });
});
