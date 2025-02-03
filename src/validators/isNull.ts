/**
 * @group Validators
 *
 * @description Checks if a value is `null`.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} Boolean indicating if the value is `null`.
 *
 * @example
 * isNull(null);
 * // => true
 * isNull(undefined);
 * // => false
 * isNull(0);
 * // => false
 */
export const isNull = (value: unknown): value is null => value === null;
