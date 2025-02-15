/**
 * HSL color representation
 */
export type HSLColor = {
	/**
	 * Hue value in the range [0, 360]
	 */
	H: number;
	/**
	 * Saturation value in the range [0, 100]
	 */
	S: number;
	/**
	 * Lightness value in the range [0, 100]
	 */
	L: number;
};

const rgbRegex = /^rgb\(\s?(\d{1,3})\s?,\s?(\d{1,3})\s?,\s?(\d{1,3})\s?\)$/;
const rgbaRegex = /^rgba\(\s?(\d{1,3})\s?,\s?(\d{1,3})\s?,\s?(\d{1,3})\s?,\s?(\d.?\d*?)\s?\)$/;
const hexRegex = /^#([A-Fa-f0-9]{3,4}){1,2}$/;
const hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%?)\s*,\s*(\d*(?:\.\d+)?%?)\)$/;
const hslaRegex = /^hsla\((\d+),\s*([\d.]+)%?,\s*([\d.]+)%?,\s*(\d*(?:\.\d+)?)\)$/;

/**
 * A utility class for working with colors.
 */
export class Color {
	R: number = 0;
	G: number = 0;
	B: number = 0;

	/**
	 * Alpha value in the range [0, 255]
	 */
	A: number = 255;

	HSL: HSLColor = { H: 0, S: 0, L: 0 };

	customValue?: unknown;
	title?: string;

	/**
	 * Creates a new color instance from RGB values and optionally alpha and HSL values
	 * @param r A red value in the range [0, 255]
	 * @param g A green value in the range [0, 255]
	 * @param b A blue value in the range [0, 255]
	 * @param a An alpha value in the range [0, 255]
	 * @param hsl An HSL color representation
	 */
	constructor(r: number, g: number, b: number, a?: number, hsl?: HSLColor) {
		this.R = r >= 0 && r < 256 ? r : 0;
		this.G = g >= 0 && g < 256 ? g : 0;
		this.B = b >= 0 && b < 256 ? b : 0;
		this.A = a !== undefined && a >= 0 && a < 256 ? a : 255;

		this.HSL = hsl ?? Color.toHSL(this);
	}

	static readonly webColorsMap: { [key: string]: string } = {
		Transparent: '#00000000',
		Black: '#000000',
		DarkSlateGray: '#2f4f4f',
		SlateGray: '#708090',
		LightSlateGray: '#778899',
		DimGray: '#696969',
		Gray: '#808080',
		DarkGray: '#a9a9a9',
		LightGray: '#d3d3d3',
		DarkSlateGrey: '#2f4f4f',
		SlateGrey: '#708090',
		LightSlateGrey: '#778899',
		DimGrey: '#696969',
		Grey: '#808080',
		DarkGrey: '#a9a9a9',
		LightGrey: '#d3d3d3',
		Silver: '#c0c0c0',
		Gainsboro: '#dcdcdc',
		WhiteSmoke: '#f5f5f5',
		White: '#ffffff',
		Snow: '#fffafa',
		HoneyDew: '#f0fff0',
		MintCream: '#f5fffa',
		Azure: '#f0ffff',
		AliceBlue: '#f0f8ff',
		GhostWhite: '#f8f8ff',
		SeaShell: '#fff5ee',
		Beige: '#f5f5dc',
		OldLace: '#fdf5e6',
		FloralWhite: '#fffaf0',
		Ivory: '#fffff0',
		AntiqueWhite: '#faebd7',
		Linen: '#faf0e6',
		LavenderBlush: '#fff0f5',
		MistyRose: '#ffe4e1',
		Pink: '#ffc0cb',
		LightPink: '#ffb6c1',
		HotPink: '#ff69b4',
		DeepPink: '#ff1493',
		PaleVioletRed: '#db7093',
		MediumVioletRed: '#c71585',
		LightSalmon: '#ffa07a',
		Salmon: '#fa8072',
		DarkSalmon: '#e9967a',
		LightCoral: '#f08080',
		IndianRed: '#cd5c5c',
		Crimson: '#dc143c',
		FireBrick: '#b22222',
		DarkRed: '#8b0000',
		Red: '#ff0000',
		OrangeRed: '#ff4500',
		Tomato: '#ff6347',
		Coral: '#ff7f50',
		DarkOrange: '#ff8c00',
		Orange: '#ffa500',
		Yellow: '#ffff00',
		LightYellow: '#ffffe0',
		LemonChiffon: '#fffacd',
		LightGoldenrodYellow: '#fafad2',
		PapayaWhip: '#ffefd5',
		Moccasin: '#ffe4b5',
		PeachPuff: '#ffdab9',
		PaleGoldenrod: '#eee8aa',
		Khaki: '#f0e68c',
		DarkKhaki: '#bdb76b',
		Gold: '#ffd700',
		Cornsilk: '#fff8dc',
		BlanchedAlmond: '#ffebcd',
		Bisque: '#ffe4c4',
		NavajoWhite: '#ffdead',
		Wheat: '#f5deb3',
		BurlyWood: '#deb887',
		Tan: '#d2b48c',
		RosyBrown: '#bc8f8f',
		SandyBrown: '#f4a460',
		Goldenrod: '#daa520',
		DarkGoldenrod: '#b8860b',
		Peru: '#cd853f',
		Chocolate: '#d2691e',
		SaddleBrown: '#8b4513',
		Sienna: '#a0522d',
		Brown: '#a52a2a',
		Maroon: '#800000',
		DarkOliveGreen: '#556b2f',
		Olive: '#808000',
		OliveDrab: '#6b8e23',
		YellowGreen: '#9acd32',
		LimeGreen: '#32cd32',
		Lime: '#00ff00',
		LawnGreen: '#7cfc00',
		Chartreuse: '#7fff00',
		GreenYellow: '#adff2f',
		SpringGreen: '#00ff7f',
		MediumSpringGreen: '#00fa9a',
		LightGreen: '#90ee90',
		PaleGreen: '#98fb98',
		DarkSeaGreen: '#8fbc8f',
		MediumAquamarine: '#66cdaa',
		MediumSeaGreen: '#3cb371',
		SeaGreen: '#2e8b57',
		ForestGreen: '#228b22',
		Green: '#008000',
		DarkGreen: '#006400',
		Aqua: '#00ffff',
		Cyan: '#00ffff',
		LightCyan: '#e0ffff',
		PaleTurquoise: '#afeeee',
		Aquamarine: '#7fffd4',
		Turquoise: '#40e0d0',
		MediumTurquoise: '#48d1cc',
		DarkTurquoise: '#00ced1',
		LightSeaGreen: '#20b2aa',
		CadetBlue: '#5f9ea0',
		DarkCyan: '#008b8b',
		Teal: '#008080',
		LightSteelBlue: '#b0c4de',
		PowderBlue: '#b0e0e6',
		LightBlue: '#add8e6',
		SkyBlue: '#87ceeb',
		LightSkyBlue: '#87cefa',
		DeepSkyBlue: '#00bfff',
		DodgerBlue: '#1e90ff',
		CornflowerBlue: '#6495ed',
		SteelBlue: '#4682b4',
		RoyalBlue: '#4169e1',
		Blue: '#0000ff',
		MediumBlue: '#0000cd',
		DarkBlue: '#00008b',
		Navy: '#000080',
		MidnightBlue: '#191970',
		Lavender: '#e6e6fa',
		Thistle: '#d8bfd8',
		Plum: '#dda0dd',
		Violet: '#ee82ee',
		Orchid: '#da70d6',
		Fuchsia: '#ff00ff',
		Magenta: '#ff00ff',
		MediumOrchid: '#ba55d3',
		MediumPurple: '#9370db',
		BlueViolet: '#8a2be2',
		DarkViolet: '#9400d3',
		DarkOrchid: '#9932cc',
		DarkMagenta: '#8b008b',
		Purple: '#800080',
		Indigo: '#4b0082',
		DarkSlateBlue: '#483d8b',
		RebeccaPurple: '#663399',
		SlateBlue: '#6a5acd',
		MediumSlateBlue: '#7b68ee',
	};

	private static colorAliases = ['Cyan', 'Magenta', 'DarkSlateGrey', 'SlateGrey', 'LightSlateGrey', 'DimGrey', 'Grey', 'DarkGrey', 'LightGrey'];

	private static webToHexMap: Record<string, string> = {};
	private static hexToWebMap: Record<string, string> = {};

	private static initMaps = () => {
		if (Object.keys(Color.webToHexMap).length > 0) return;

		for (const name in Color.webColorsMap) {
			Color.webToHexMap[name.toLowerCase()] = Color.webColorsMap[name];
		}

		for (const name of Color.webColors(true)) {
			Color.hexToWebMap[Color.webColorsMap[name]] = name;
		}
	};

	static readonly webColors = (filterAliases = false) =>
		filterAliases ? Object.keys(Color.webColorsMap).filter((color) => !Color.colorAliases.includes(color)) : Object.keys(Color.webColorsMap);

	static readonly webColorsEnum = (filterAliases = false) =>
		Color.webColors(filterAliases).map((color) => ({ name: color, value: Color.webColorsMap[color] }));

	static readonly fromWeb = (webColor: string): Color => {
		Color.initMaps();

		const hexColor: string | undefined = Color.webToHexMap[webColor.toLowerCase()];
		if (!hexColor) return new Color(0, 0, 0);

		return Color.fromHEX(hexColor);
	};

	/**
	 * Create a new color instance from RGB values
	 * @param red The red value in the range [0, 255]
	 * @param green The green value in the range [0, 255]
	 * @param blue The blue value in the range [0, 255]
	 * @param alpha The alpha value in the range [0, 255]
	 * @returns A new color instance
	 */
	static readonly fromRGB = (red: number, green: number, blue: number, alpha?: number): Color => {
		Color.initMaps();

		return new Color(red, green, blue, alpha);
	};

	/**
	 * Create a new color instance from RGBA values
	 * @param red The red value in the range [0, 255]
	 * @param green The green value in the range [0, 255]
	 * @param blue The blue value in the range [0, 255]
	 * @param alpha The alpha value in the range [0, 1]
	 * @returns A new color instance
	 */
	static readonly fromRGBA = (red: number, green: number, blue: number, alpha?: number): Color => {
		Color.initMaps();

		return new Color(red, green, blue, alpha !== undefined ? alpha * 255 : alpha);
	};

	/**
	 * Create a new color instance from HEX value
	 * @param color A string value representing a color in HEX format, for example '#ff0000'
	 * @returns A new color instance
	 */
	static readonly fromHEX = (color: string): Color => {
		Color.initMaps();

		if (!color || !hexRegex.test(color)) return new Color(0, 0, 0);

		let hexValues = color.substring(1).split('');
		if (hexValues.length === 3 || hexValues.length === 4) hexValues = hexValues.reduce((prev, curr) => [...prev, curr, curr], []);
		const hex = parseInt(`0x${hexValues.join('')}`);

		const rgbValues: number[] = [];
		if (hexValues.length === 8) rgbValues.push((hex >> 24) & 255);
		rgbValues.push((hex >> 16) & 255);
		rgbValues.push((hex >> 8) & 255);
		rgbValues.push(hex & 255);
		return new Color(rgbValues[0], rgbValues[1], rgbValues[2], rgbValues[3] ?? 255);
	};

	/** Parse color from string value. Accept HEX, HEX8, rgb(), rgba() and Web color string */
	static readonly fromString = (color: string | undefined): Color => {
		if (!color) return new Color(0, 0, 0);

		Color.initMaps();

		if (hexRegex.test(color)) return Color.fromHEX(color);

		const rgbRegexResult = rgbRegex.exec(color);
		if (rgbRegexResult) {
			const [, red, green, blue] = rgbRegexResult;
			return new Color(parseInt(red), parseInt(green), parseInt(blue));
		}

		const rgbaRegexResult = rgbaRegex.exec(color);
		if (rgbaRegexResult) {
			const [, red, green, blue, alpha] = rgbaRegexResult;
			return new Color(parseInt(red), parseInt(green), parseInt(blue), parseFloat(alpha) * 255);
		}

		if (hslRegex.test(color)) return Color.parseHSL(color);
		if (hslaRegex.test(color)) return Color.parseHSLA(color);

		return Color.fromWeb(color);
	};

	/**
	 * Parse color from HSL string value
	 * @param color A string value representing a color in HSL format, for example 'hsl(120, 100%, 50%)'
	 * @returns
	 */
	static readonly parseHSL = (color: string): Color => {
		try {
			const hsl = color
				.replace(/[^\d,.]/g, '')
				.split(',')
				.map((v) => parseFloat(v));
			return Color.fromHSL({ H: hsl[0], S: hsl[1], L: hsl[2] });
		} catch {
			return new Color(0, 0, 0);
		}
	};

	/**
	 * Parse color from HSLA string value
	 * @param color A string value representing a color in HSLA format, for example 'hsla(120, 100%, 50%, 0.7)'
	 * @returns
	 */
	static readonly parseHSLA = (color: string): Color => {
		try {
			const hsla = color
				.replace(/[^\d,.]/g, '')
				.split(',')
				.map((v) => parseFloat(v));
			return Color.fromHSLA({ H: hsla[0], S: hsla[1], L: hsla[2] }, hsla[3]);
		} catch {
			return new Color(0, 0, 0);
		}
	};

	/**
	 * Create a new color instance from HSL values
	 * @param color An HSL color representation
	 * @param alpha An alpha value in the range [0, 1]
	 * @returns A new color instance
	 */
	static readonly fromHSL = (color: HSLColor, alpha?: number): Color => {
		Color.initMaps();

		const { H: absH, S: absS, L: absL } = color;

		const H = absH / 360;
		const S = absS / 100;
		const L = absL / 100;

		let R: number, G: number, B: number;

		if (S == 0) {
			R = G = B = L;
		} else {
			const hue2rgb = (p: number, q: number, t: number) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};

			const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
			const p = 2 * L - q;

			R = hue2rgb(p, q, H + 1 / 3);
			G = hue2rgb(p, q, H);
			B = hue2rgb(p, q, H - 1 / 3);
		}

		return new Color(Math.round(R * 255), Math.round(G * 255), Math.round(B * 255), alpha !== undefined ? alpha * 255 : alpha, color);
	};

	/**
	 * Create a new color instance from HSLA values
	 * @param color An HSL color representation
	 * @param alpha An alpha value in the range [0, 1]
	 * @returns A new color instance
	 */
	static readonly fromHSLA = (color: HSLColor, alpha?: number): Color => {
		Color.initMaps();

		return Color.fromHSL(color, alpha);
	};

	static readonly toWeb = (color: Color): string | undefined => {
		if (!color) return undefined;

		Color.initMaps();

		if (color.A === 0) return 'Transparent';
		else {
			const hex = color.hex.toLowerCase();
			return Color.hexToWebMap[hex];
		}
	};

	static readonly toHSL = (color: Color): HSLColor => {
		Color.initMaps();

		const R = color.R / 255;
		const G = color.G / 255;
		const B = color.B / 255;

		const max = Math.max(R, G, B),
			min = Math.min(R, G, B);

		let H = 0,
			S;
		const L = (max + min) / 2;

		if (max == min) {
			H = S = 0;
		} else {
			const d = max - min;
			S = L > 0.5 ? d / (2 - max - min) : d / (max + min);

			switch (max) {
				case R:
					H = (G - B) / d + (G < B ? 6 : 0);
					break;
				case G:
					H = (B - R) / d + 2;
					break;
				case B:
					H = (R - G) / d + 4;
					break;
			}

			H /= 6;
		}

		return {
			H: Math.round(H * 360),
			S: Math.round(S * 100),
			L: Math.round(L * 100),
		};
	};

	static readonly shade = (color: Color, percent: number): Color => {
		if (!color) return new Color(0, 0, 0);

		if (percent < -1 || percent > 1) return color;

		const colorBase = percent < 0 ? 0 : 255;
		const shade = (c: number) => Math.round((colorBase - c) * Math.abs(percent)) + c;

		const { R, G, B, A } = color;
		return new Color(shade(R), shade(G), shade(B), A);
	};

	static readonly shades = (color: Color): Color[] => {
		if (!color) return [];

		return [
			color,
			Color.shade(color, -0.5),
			Color.shade(color, -0.25),
			Color.shade(color, 0.25),
			Color.shade(color, 0.5),
			Color.shade(color, 0.75),
		];
	};

	static readonly mix = (color1: Color, color2: Color, percent: number): Color => {
		if (!color1 || !color2) return new Color(0, 0, 0, 255);

		if (percent < 0 || percent > 1) return color1;

		const mix = (c1: number, c2: number) => Math.round(c1 + (c2 - c1) * percent);

		const { R: R1, G: G1, B: B1, A: A1 } = color1;
		const { R: R2, G: G2, B: B2, A: A2 } = color2;

		return new Color(mix(R1, R2), mix(G1, G2), mix(B1, B2), Math.round((A1 + A2) / 2));
	};

	static readonly isLight = ({ R, G, B }: Color) => {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const yiq = (R * 2126 + G * 7152 + B * 722) / 10000;
		return yiq >= 128;
	};

	static readonly isDark = (color: Color) => !Color.isLight(color);

	public lighten(percent: number) {
		return Color.shade(this, percent);
	}

	public darken(percent: number) {
		return Color.shade(this, -percent);
	}

	public transparentize(percent: number) {
		return percent >= 0 && percent <= 1 ? new Color(this.R, this.G, this.B, Math.round(this.A * (1 - percent)), this.HSL) : this;
	}

	public get rgb(): string {
		return `rgb(${this.R}, ${this.G}, ${this.B})`;
	}
	public get rgba(): string {
		return `rgba(${this.R}, ${this.G}, ${this.B}, ${Math.round((this.A / 255) * 100) / 100})`;
	}

	public get hex(): string {
		return `#${(0x1000000 + this.R * 0x10000 + this.G * 0x100 + this.B).toString(16).slice(1)}`;
	}

	public get hex8(): string {
		return `${this.hex}${(0x100 + this.A).toString(16).slice(1)}`;
	}

	public get hslParts(): string {
		const { H, S, L } = this.HSL;
		return `${H}, ${S}%, ${L}%`;
	}

	public get hsl(): string {
		const { H, S, L } = this.HSL;
		return `hsl(${H}, ${S}%, ${L}%)`;
	}

	public get hsla(): string {
		const { H, S, L } = this.HSL;
		return `hsla(${H}, ${S}%, ${L}%, ${Math.round((this.A / 255) * 100) / 100})`;
	}
}
