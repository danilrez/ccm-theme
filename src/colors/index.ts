import { isNestedObject } from '../validators/isNestedObject';
import { isValidHexColor } from '../validators/isValidHexColor';
import { isValidOpacity } from '../validators/isValidOpacity';
import { colorsDark, opacityLevel } from './constants';
import type { ColorName, ColorShades, HexColor, HSLColor, NestedObject, OpacityLevel, Shade, Theme } from './types';
import { Color } from './color';

export const withOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevel[opacity]}`;

export const getColor = (color: ColorName, shade: Shade, opacity?: number): HexColor => {
	const colorValue = colorsDark?.[color]?.[shade];

	if (!isValidHexColor(colorValue)) throw new Error(`Invalid HEX color: ${colorValue}`);
	if (!opacity) return colorValue;

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return withOpacity(colorValue, opacity);
};

export const flattenOptimizedTheme = (obj: NestedObject, result: Theme = {}): Theme => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value)) flattenOptimizedTheme(value, result);
		// else if (value !== undefined && value !== defaultColor) result[key] = value as HexColor;
		else if (value !== undefined) result[key] = value as HexColor;
	});

	return result;
};

// This function is used for testing unset colors
export const flattenOptimizedTestTheme = (obj: NestedObject, result: Theme = {}): Theme => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value)) flattenOptimizedTestTheme(value, result);
		else if (value === undefined) result[key] = '#f007';
	});

	return result;
};

const generateColor = (color: HexColor | HSLColor): HexColor => (typeof color === 'string' ? Color.fromHEX(color) : Color.fromHSL(color)).hex;

/**
 * Generates a shades Map from an array of colors.
 * The input array must have a length of 10, where the first color corresponds to shade 900,
 * the second to 800, and so on, with the last color corresponding to shade 50.
 *
 * @param {(HexColor | HSLColor)[]} colors - Array of colors in HEX string or HSLColor format.
 * @returns {ColorShades} A Map mapping shade keys to HEX color strings.
 */
export const generateShades = (colors: (HexColor | HSLColor)[]): ColorShades => {
	if (colors.length !== 10) throw new Error('Input array must have a length of 10.');

	const shadeKeys: Shade[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
	const shades = new Map<Shade, HexColor>();

	colors.forEach((color, index) => shades.set(shadeKeys[index], generateColor(color)));

	return shades;
};

const neutralArray = ['#0D1017', '#1A1F28', '#232934', '#333A47', '#545B69', '#6F7785', '#959AA3', '#BBBEC3', '#E4E5E7', '#F1F2F3'] as HexColor[];
console.log('generateShades', generateShades(neutralArray));
