import { isNestedObject, isValidHexColor, isValidOpacity } from '../validators';
import { Color } from './color';
import { HSLColors, opacityLevelMap } from './constants';
import { ColorName, ColorShades, HexColor, HSLColor, NestedObject, OpacityLevel, Shade, Theme } from './types';

const hexWithOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevelMap.get(opacity)}`;
const generateColor = (color: HexColor | HSLColor): HexColor => (typeof color === 'string' ? Color.fromHEX(color) : Color.fromHSL(color)).hex;
/**
 * Generates a shades Map from an array of colors.
 * The input array must have a length of 10, where the first color corresponds to shade 900,
 * the second to 800, and so on, with the last color corresponding to shade 50.
 *
 * @param {(HexColor | HSLColor)[]} colors - Array of colors in HEX string or HSLColor format.
 * @returns {ColorShades} A Map mapping shade keys to HEX color strings.
 */
const generateShades = (colors: (HexColor | HSLColor)[]): ColorShades => {
	if (colors.length !== 10) throw new Error('Input array must have a length of 10.');

	const shadeKeys: Shade[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
	const shades = new Map<Shade, HexColor>();

	colors.forEach((color, index) => shades.set(shadeKeys[index], generateColor(color)));

	return shades;
};

export const getColor = (colorName: ColorName, shade: Shade, opacity?: number): HexColor => {
	const colorsMap = generateShades(HSLColors?.[colorName]);
	const hexColor = colorsMap.get(shade);

	if (!isValidHexColor(hexColor)) throw new Error(`Invalid HEX color: ${hexColor}`);
	if (!opacity) return hexColor;

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return hexWithOpacity(hexColor, opacity);
};

export const flattenOptimizedTheme = (obj: NestedObject, result: Theme = {}): Theme => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value)) flattenOptimizedTheme(value, result);
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
