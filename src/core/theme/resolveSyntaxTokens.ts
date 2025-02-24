import { Token } from '../../customizations';
import { resolvePaletteColor } from '../colors/resolvePaletteColor';
import { ThemeType } from './generateTheme';

type RemapFunction = (shade: number) => number;

const remapStrategies = (themeType: ThemeType): Record<string, RemapFunction> => ({
	neutral: (shade: number) => (themeType === 'dark' ? shade : shade === 900 ? 700 : shade === 700 ? 900 : shade),
	default: (shade: number) =>
		themeType === 'dark' ? shade : shade === 300 ? 500 : shade === 400 ? 600 : shade === 500 ? 700 : shade + 100 <= 900 ? shade + 100 : 900,
});

/**
 * @description Resolves syntax tokens by processing an array of token objects.
 *
 * For each token object in the array, if the token's settings contain a "foreground"
 * property and its value is an array of length 2 or 3 (i.e. a color token in the form
 * `[colorName, shade, opacity?]`), this property is replaced with the corresponding
 * HEX color obtained via `resolvePaletteColor`. All other properties (e.g. "scope", "fontStyle")
 * remain unchanged.
 *
 * @param {Token[]} tokens - The array of token objects to process.
 * @returns {Token[]} A new array of tokens with resolved foreground colors.
 *
 * @example
 * const tokens = [{
 *   scope: ["comment", "punctuation.accessor"],
 *   settings: {
 *     fontStyle: "bold",
 *     foreground: ["neutral", 200]
 *   }
 * }];
 *
 * const resolvedTokens = resolveSyntaxTokens(tokens);
 * // resolvedTokens[0].settings.foreground now holds the HEX color from resolvePaletteColor('neutral', 200)
 */
export const resolveSyntaxTokens = (themeType: ThemeType, tokens: Token[]): Token[] =>
	tokens.map((token) => {
		const newToken = { ...token };
		if (newToken.settings && newToken.settings?.foreground) {
			const fg = newToken.settings.foreground;
			if (Array.isArray(fg) && (fg.length === 2 || fg.length === 3)) {
				const [color, shade, opacity] = fg;
				const remapFn = remapStrategies(themeType)[color] ?? remapStrategies(themeType).default;
				const newShade = remapFn(Number(shade));
				newToken.settings.foreground = resolvePaletteColor(themeType, color, newShade, opacity);
			}
		}
		return newToken;
	});
