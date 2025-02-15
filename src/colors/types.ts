import { colorsDark, opacityLevel } from './constants';
import { colorsLight } from './constantsInverted';

export type HexColor = `#${string}`;
type ColorsDark = keyof typeof colorsDark;
type ColorsLight = keyof typeof colorsLight;
export type Color = ColorsDark | ColorsLight;
export type Shade = keyof (typeof colorsDark)['neutral'];
export type OpacityLevel = keyof typeof opacityLevel;
export type NestedObject = { [key: string]: string | undefined | NestedObject };
export type Theme = Record<string, HexColor>;

/**
 * A set of shades for a color.
 */
export type ColorShades = {
	50: Color;
	100: Color;
	200: Color;
	300: Color;
	400: Color;
	500: Color;
	600: Color;
	700: Color;
	800: Color;
	900: Color;
};

export type ColorThemeType = 'light' | 'dark';
