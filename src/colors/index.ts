import { colorsDark, opacityLevel } from './constants';
<<<<<<< HEAD
<<<<<<< HEAD
import type { Color, HexColor, NestedObject, OpacityLevel, Shade } from './types';
import { isNestedObject, isValidHexColor, isValidOpacity } from './validators';

export const withOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevel[opacity]}`;

=======
import type { Color, HexColor, OpacityLevel, Shade } from './types';
=======
import type { Color, HexColor, NestedObject, OpacityLevel, Shade } from './types';
import { isNestedObject, isValidHexColor, isValidOpacity } from './validators';
>>>>>>> 5edd62f (step2)

export const withOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevel[opacity]}`;

<<<<<<< HEAD
export const withOpacity = (color: string, opacity: OpacityLevel) => `${color}${opacityLevel[opacity]}`;

// Проверка валидности HEX-кода и возврат строго типизированного HexColor
>>>>>>> af3043b (refactor)
=======
>>>>>>> 5edd62f (step2)
export const getColor = (color: Color, shade: Shade, opacity?: number): HexColor => {
	const colorValue = colorsDark?.[color]?.[shade];

	if (!isValidHexColor(colorValue)) throw new Error(`Invalid HEX color: ${colorValue}`);
<<<<<<< HEAD
<<<<<<< HEAD
	if (!opacity) return colorValue;

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return withOpacity(colorValue, opacity);
};

export const optimizeTheme = (obj: NestedObject): NestedObject =>
	Object.entries(obj).reduce((acc, [key, value]) => {
		isNestedObject(value) ? (acc[key] = optimizeTheme(value)) : (acc[key] = value);
		return acc;
	}, {});
=======
	if (!opacity) return colorValue as HexColor;
=======
	if (!opacity) return colorValue;
>>>>>>> 5edd62f (step2)

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return withOpacity(colorValue, opacity);
};

<<<<<<< HEAD
// Проверка, является ли строка валидным HEX-кодом
export const isValidHexColor = (color: string): color is HexColor => {
	const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
	return hexRegex.test(color);
};

export const isValidOpacity = (opacity: number): opacity is OpacityLevel => opacity in opacityLevel;

export const optimizeTheme = (obj: Record<string, any>, prefix = ''): Record<string, any> =>
	Object.entries(obj).reduce(
		(acc, [key, value]) => {
			// value !== undefined && value !== null
			if (value != null) {
				const newKey = prefix ? `${prefix}.${key}` : key;

				if (typeof value === 'object' && !Array.isArray(value)) Object.assign(acc, optimizeTheme(value, newKey));
				else acc[newKey] = value;
			}
			return acc;
		},
		{} as Record<string, any>,
	);
>>>>>>> af3043b (refactor)
=======
export const optimizeTheme = (obj: NestedObject): NestedObject =>
	Object.entries(obj).reduce((acc, [key, value]) => {
		isNestedObject(value) ? (acc[key] = optimizeTheme(value)) : (acc[key] = value);
		return acc;
	}, {});
>>>>>>> 5edd62f (step2)
