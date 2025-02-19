import { HexColor } from '../colors/types';

export const isValidHexColor = (color: string | undefined): color is HexColor =>
	!color ? false : /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
