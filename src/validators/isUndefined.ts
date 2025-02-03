/**
 * @group Validators
 *
 * @description Checks if a value is undefined.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} Boolean indicating if the value is undefined.
 *
 * @example
 * isUndefined(undefined); // => true
 * isUndefined(null); // => false
 * isUndefined(0); // => false
 */
export const isUndefined = (value: unknown): value is undefined => value === void 0;
