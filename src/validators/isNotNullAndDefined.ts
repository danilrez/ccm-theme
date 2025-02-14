import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * @group Validators
 *
 * @description Checks if the value is not null and not undefined.
 *
 * @param {T | null | undefined} value - The value to check.
 * @returns {boolean} Returns `true` if the value is not null and not undefined, otherwise `false`.
 *
 * @example
 * isNotNullAndDefined(5);
 * // => true
 * isNotNullAndDefined(null);
 * // => false
 * isNotNullAndDefined(undefined);
 * // => false
 */
export const isNotNullAndDefined = <T>(value: T | null | undefined): value is T => !isNull(value) && !isUndefined(value);
