import { isNestedObject } from '../validators/isNestedObject';
import { isValidHexColor } from '../validators/isValidHexColor';
import { isValidOpacity } from '../validators/isValidOpacity';
import { colorsDark, opacityLevel } from './constants';
import type { Color, HexColor, NestedObject, OpacityLevel, Shade, Theme } from './types';

export const withOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevel[opacity]}`;

export const getColor = (color: Color, shade: Shade, opacity?: number): HexColor => {
	const colorValue = colorsDark?.[color]?.[shade];

	if (!isValidHexColor(colorValue)) throw new Error(`Invalid HEX color: ${colorValue}`);
	if (!opacity) return colorValue;

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return withOpacity(colorValue, opacity);
};

export const flattenOptimizedTheme = (obj: NestedObject, result: Theme = {}): Theme => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value)) flattenOptimizedTheme(value, result);
		else if (value != undefined) result[key] = value as HexColor;
	});

	return result;
};
