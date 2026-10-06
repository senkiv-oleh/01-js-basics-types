const {
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
} = require('../src/script');

describe('Task 1: Types, Strings and Numbers', () => {
    describe('1.1 getType()', () => {
        test('identifies primitive types correctly', () => {
            expect(getType(42)).toBe('number');
            expect(getType('hello')).toBe('string');
            expect(getType(true)).toBe('boolean');
            expect(getType(undefined)).toBe('undefined');
        });

        test('handles null and objects correctly', () => {
            expect(getType(null)).toBe('object'); // JS standard typeof behavior
            expect(getType({})).toBe('object');
            expect(getType([])).toBe('object');
        });
    });

    describe('1.2 isNullOrUndefined()', () => {
        test('returns true for null and undefined', () => {
            expect(isNullOrUndefined(null)).toBe(true);
            expect(isNullOrUndefined(undefined)).toBe(true);
        });

        test('returns false for falsy non-null values', () => {
            expect(isNullOrUndefined(0)).toBe(false);
            expect(isNullOrUndefined('')).toBe(false);
            expect(isNullOrUndefined(false)).toBe(false);
        });
    });

    describe('1.3 convertToNumber()', () => {
        test('converts valid strings and booleans to numbers', () => {
            expect(convertToNumber('123')).toBe(123);
            expect(convertToNumber('42.5')).toBe(42.5);
            expect(convertToNumber(true)).toBe(1);
        });

        test('returns NaN for non-numeric strings', () => {
            expect(convertToNumber('abc')).toBeNaN();
        });
    });

    describe('1.4 isNaNValue()', () => {
        test('returns true ONLY for NaN', () => {
            expect(isNaNValue(NaN)).toBe(true);
            expect(isNaNValue('hello')).toBe(false); // Global isNaN('hello') is true, Number.isNaN is false
            expect(isNaNValue(123)).toBe(false);
            expect(isNaNValue(undefined)).toBe(false);
        });
    });

    describe('1.5 safeAdd()', () => {
        test('coerces string numbers and adds them', () => {
            expect(safeAdd('10', '20')).toBe(30);
            expect(safeAdd(5, '5')).toBe(10);
        });

        test('returns NaN when a value cannot be coerced to a number', () => {
            expect(safeAdd('abc', 10)).toBeNaN();
        });
    });

    describe('1.6 capitalizeWord()', () => {
        test('capitalizes the first letter of a word', () => {
            expect(capitalizeWord('hello')).toBe('Hello');
            expect(capitalizeWord('javascript')).toBe('Javascript');
        });

        test('handles empty strings and single characters', () => {
            expect(capitalizeWord('')).toBe('');
            expect(capitalizeWord('a')).toBe('A');
        });
    });

    describe('1.7 containsIgnoreCase()', () => {
        test('finds substring regardless of case', () => {
            expect(containsIgnoreCase('Hello World', 'world')).toBe(true);
            expect(containsIgnoreCase('JAVASCRIPT', 'script')).toBe(true);
        });

        test('returns false when substring is not present', () => {
            expect(containsIgnoreCase('Frontend', 'backend')).toBe(false);
        });
    });

    describe('1.8 roundToDecimal()', () => {
        test('rounds numbers to requested decimal places', () => {
            expect(roundToDecimal(3.14159, 2)).toBe(3.14);
            expect(roundToDecimal(1.005, 2)).toBe(1.01);
            expect(roundToDecimal(10.5, 0)).toBe(11);
        });
    });

    describe('1.9 isLeapYear()', () => {
        test('correctly evaluates leap years', () => {
            expect(isLeapYear(2024)).toBe(true);
            expect(isLeapYear(2000)).toBe(true);
            expect(isLeapYear(1900)).toBe(false);
            expect(isLeapYear(2023)).toBe(false);
        });
    });

    describe('1.10 isValidPassword()', () => {
        test('accepts valid passwords (>=8 chars + at least 1 digit)', () => {
            expect(isValidPassword('pass1234')).toBe(true);
            expect(isValidPassword('secureP4ss')).toBe(true);
        });

        test('rejects passwords that are too short or lack digits', () => {
            expect(isValidPassword('short1')).toBe(false);
            expect(isValidPassword('password')).toBe(false);
        });
    });
});