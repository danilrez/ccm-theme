import { opacityLevel } from './constants';
import { HexColor, NestedObject, OpacityLevel } from './types';

export const isValidHexColor = (color: string): color is HexColor => {
	const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
	return hexRegex.test(color);
};

export const isValidOpacity = (opacity: number): opacity is OpacityLevel => opacity in opacityLevel;

export const isNestedObject = (value: string | undefined | NestedObject): value is NestedObject => value != null && typeof value === 'object';
