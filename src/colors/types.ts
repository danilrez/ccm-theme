import { HSLColors } from './constants';

export type HexColor = `#${string}`;
export type ColorName = keyof typeof HSLColors;
export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type OpacityLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
export type NestedObject = { [key: string]: NestedObject | string | undefined };
export type Theme = Record<string, HexColor>;

/**
 * A set of shades for a color.
 */
export type ColorShades = Map<Shade, HexColor>;

/**
 * Represents a color in HSL (Hue, Saturation, Lightness) format.
 *
 * @property {number} H - The hue value in the range [0, 360].
 * @property {number} S - The saturation value in the range [0, 100].
 * @property {number} L - The lightness value in the range [0, 100].
 * @property {number} [A] - The optional alpha value in the range [0, 255].
 */
export type HSLColor = {
	H: number;
	S: number;
	L: number;
	A?: number;
};
