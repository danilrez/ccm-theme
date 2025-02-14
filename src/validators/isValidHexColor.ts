import { HexColor } from '../colors/types';

export const isValidHexColor = (color: string): color is HexColor => {
	const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
	return hexRegex.test(color);
};
