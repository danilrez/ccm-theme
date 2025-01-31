import { colorsDark, opacityLevel } from './constants';
<<<<<<< HEAD
import type { Color, HexColor, NestedObject, OpacityLevel, Shade } from './types';
import { isNestedObject, isValidHexColor, isValidOpacity } from './validators';

export const withOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevel[opacity]}`;

=======
import type { Color, HexColor, OpacityLevel, Shade } from './types';

// const hexRegex = /^#([A-Fa-f0-9]{3,4}){1,2}$/;

export const withOpacity = (color: string, opacity: OpacityLevel) => `${color}${opacityLevel[opacity]}`;

// Проверка валидности HEX-кода и возврат строго типизированного HexColor
>>>>>>> af3043b (refactor)
export const getColor = (color: Color, shade: Shade, opacity?: number): HexColor => {
	const colorValue = colorsDark?.[color]?.[shade];

	if (!isValidHexColor(colorValue)) throw new Error(`Invalid HEX color: ${colorValue}`);
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

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);

	return withOpacity(colorValue, opacity) as HexColor;
};

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
