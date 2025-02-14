/**
 * @group Validators
 *
 * @description Checks if a value is a string.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} Boolean indicating if the value is a string.
 *
 * @example
 * isString('hello'); // => true
 * isString(123); // => false
 * isString(null); // => false
 */
export const isString = (value: unknown): value is string => typeof value === 'string';
