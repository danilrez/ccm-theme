import { Default, DEFAULT, TESTER, TRANSPARENT, type HexColor } from '../../colors';
import { NestedObject } from '../../customizations';
import { resolvePaletteColor } from '../colors/resolvePaletteColor';
import { isNestedObject, isValidHexColor } from '../validators';

export type Theme = Record<string, HexColor | Default>;
type RemapFunction = (shade: number) => number;

const remapStrategies = (themeType: string): Record<string, RemapFunction> => ({
	neutral: (shade: number) => shade, // (themeState.getThemeType() === 'dark' ? shade : shade === 900 ? 700 : shade === 700 ? 900 : shade),
	default: (shade: number) =>
		themeType === 'dark' ? shade : shade === 300 ? 500 : shade === 400 ? 600 : shade === 500 ? 700 : shade + 100 <= 900 ? shade + 100 : 900,
});

/**
 * @description Recursively flattens a nested theme object into a single-level object.
 *
 * The function iterates over each key/value pair in the provided nested theme object.
 * Its behavior depends on the `unsetMode` flag:
 *
 * - When `unsetMode` is false (default):
 *    - If a value equals TRANSPARENT or DEFAULT, it is copied as-is.
 *    - If a value is an array of length 2 or 3, it is assumed to be a color token
 *      in the form [colorName, shade, opacity?] and is resolved using resolvePaletteColor.
 *    - All other defined values are copied as-is.
 *
 * - When `unsetMode` is true:
 *    - Any key with an undefined value is replaced with the fallback TESTER.
 *    - Defined values are left unchanged.
 *
 * Note: The function recursively flattens all nested objects into a single-level accumulator.
 *
 * @param {NestedObject} obj - The nested theme object to flatten.
 * @param {boolean} [unsetMode=false] - If true, replaces undefined values with a fallback.
 * @param {Theme} [result={}] - The accumulator that collects flattened theme values.
 * @returns {Theme} A flattened object with keys mapping to HEX color strings or Default values.
 *
 * @example
 * const themeCustomization = {
 *   "editor.inactiveSelectionBackground": ["neutral", 400, 10],
 *   "editor.tokenColorCustomizations": {
 *     "textMateRules": {
 *       "scope": ["comment"],
 *       "foreground": ["neutral", 200]
 *     }
 *   }
 * };
 * const flatTheme = resolveWorkbenchTokens(themeCustomization);
 */
export const resolveWorkbenchTokens = (themeType: string, obj: NestedObject, unsetMode: boolean = false, result: Theme = {}): Theme => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value) && !Array.isArray(value)) resolveWorkbenchTokens(themeType, value, unsetMode, result);
		if (unsetMode && value === undefined) result[key] = TESTER;
		if (!unsetMode && value !== undefined) {
			if (value === TRANSPARENT || value === DEFAULT) result[key] = value;
			if (Array.isArray(value) && (value.length === 2 || value.length === 3)) {
				const [color, shade, opacity] = value;

				const remapFn = remapStrategies(themeType)[color] ?? remapStrategies(themeType).default;
				const newShade = remapFn(Number(shade));
				result[key] = resolvePaletteColor(themeType, color, newShade, opacity);
			}
			if (isValidHexColor(value)) result[key] = value;
		}
	});
	return result;
};
