import isValidCategory from '../../hook/Domain/Search/isValidCategory';
import { describe, test, expect } from 'vitest';

describe('Validate Category', () => {
  test('should return false for invalid input', () => {
    expect(isValidCategory('')).toBe(false);
  });

  test('should return category code for valid input', () => {
    expect(isValidCategory('AD5')).toBe('AD5');
    expect(isValidCategory('AC5')).toBe('AC5');
    expect(isValidCategory('AG2')).toBe('AG2');
    expect(isValidCategory('BK9')).toBe('BK9');
    expect(isValidCategory('CS2')).toBe('CS2');
    expect(isValidCategory('FD6')).toBe('FD6');
  });
});
