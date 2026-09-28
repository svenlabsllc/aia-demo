const { formatDate, slugify, paginate, validateEmail } = require('../src/utils');

describe('utils.js helper functions', () => {

  // 1. Tests for formatDate
  describe('formatDate', () => {
    test('should format a valid Date object to YYYY-MM-DD', () => {
      const date = new Date('2026-12-25T15:30:00Z');
      expect(formatDate(date)).toBe('2026-12-25');
    });

    test('should throw an error if an invalid date or non-Date object is passed (Edge Case)', () => {
      expect(() => formatDate('invalid-date')).toThrow();
      expect(() => formatDate(null)).toThrow();
    });
  });

  // 2. Tests for slugify
  describe('slugify', () => {
    test('should convert text to lowercase and replace spaces with dashes', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    test('should handle multiple spaces correctly', () => {
      expect(slugify('hello   world')).toBe('hello---world');
    });

    test('should return an empty string if an empty string is provided (Edge Case)', () => {
      expect(slugify('')).toBe('');
    });
  });

  // 3. Tests for paginate
  describe('paginate', () => {
    const sampleArray = [1, 2, 3, 4];

    test('should return the correct subset of items for the first page', () => {
      expect(paginate(sampleArray, 1, 2)).toEqual([1, 2]);
    });

    test('should return the correct subset for subsequent pages', () => {
      expect(paginate(sampleArray, 2, 2)).toEqual([3, 4]);
    });

    test('should return an empty array if page is out of bounds (Edge Case)', () => {
      expect(paginate(sampleArray, 4, 2)).toEqual([]);
    });

    test('should handle empty arrays correctly (Edge Case)', () => {
      expect(paginate([], 1, 2)).toEqual([]);
    });
  });

  // 4. Tests for validateEmail
  describe('validateEmail', () => {
    test('should return true if the email contains an @ symbol', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('should return false if the email does not contain an @ symbol', () => {
      expect(validateEmail('invalid-email.com')).toBe(false);
    });

    test('should return false for an empty string (Edge Case)', () => {
      expect(validateEmail('')).toBe(false);
    });
  });

});
