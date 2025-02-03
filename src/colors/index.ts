import { colorsDark, opacityLevel } from './constants';
import type { Color, HexColor, NestedObject, OpacityLevel, Shade } from './types';
import { isNestedObject, isValidHexColor, isValidOpacity } from './validators';

export const withOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevel[opacity]}`;

export const getColor = (color: Color, shade: Shade, opacity?: number): HexColor => {
	const colorValue = colorsDark?.[color]?.[shade];

	if (!isValidHexColor(colorValue)) throw new Error(`Invalid HEX color: ${colorValue}`);
	if (!opacity) return colorValue;

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return withOpacity(colorValue, opacity);
};

export const optimizeTheme = (obj: NestedObject): NestedObject =>
	Object.entries(obj).reduce((acc, [key, value]) => {
		isNestedObject(value) ? (acc[key] = optimizeTheme(value)) : (acc[key] = value);
		return acc;
	}, {});
