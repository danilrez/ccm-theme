import { colorsDark, opacityLevel } from './constants';

export type HexColor = `#${string}`;
export type ColorName = keyof typeof colorsDark;
export type Shade = keyof (typeof colorsDark)['neutral'];
export type OpacityLevel = keyof typeof opacityLevel;
export type NestedObject = { [key: string]: string | undefined | NestedObject };
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
