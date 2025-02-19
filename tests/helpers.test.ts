import { describe, it, expect } from 'vitest';
import { getHEXColor, flattenOptimizedTheme, generateShades } from '../src/colors';
import { opacityLevelMap, TRANSPARENT, DEFAULT } from '../src/colors/constants';
import { ColorName, Shade, NestedObject } from '../src/colors/types';

/**
 * ------------------------------------------------------------------
 * Test suite for `getHEXColor`.
 * ------------------------------------------------------------------
 */
describe('getHEXColor()', () => {
	it('returns a valid HEX color for a known colorName and shade', () => {
		const color = getHEXColor('red', 900);
		expect(color).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
	});

	it('appends opacity when provided', () => {
		const colorWithOpacity = getHEXColor('red', 900, 50);
		const opacityHex = opacityLevelMap.get(50); // e.g., "80"
		expect(colorWithOpacity.endsWith(opacityHex ?? '')).toBe(true);
	});

	it('throws an error if colorName is invalid', () => {
		// @ts-expect-error Test an invalid color name
		expect(() => getHEXColor('unknown', 900)).toThrowError();
	});

	it('throws an error if shade is invalid', () => {
		// @ts-expect-error Test an invalid shade
		expect(() => getHEXColor('red', 999)).toThrowError();
	});

	it('throws an error if opacity is invalid', () => {
		expect(() => getHEXColor('red', 900, 999)).toThrowError();
	});

	it('works for a variety of color names', () => {
		const testColors: ColorName[] = ['neutral', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'violet', 'orange'];
		testColors.forEach((colorName) => {
			const color = getHEXColor(colorName, 500);
			expect(color).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		});
	});

	it('supports all valid shade keys (900 → 50) for a single color', () => {
		const allShades: Shade[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
		allShades.forEach((shade) => {
			const color = getHEXColor('blue', shade);
			expect(color).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		});
	});
});

/**
 * ------------------------------------------------------------------
 * Test suite for `flattenOptimizedTheme()`.
 * ------------------------------------------------------------------
 */
describe('flattenOptimizedTheme()', () => {
	it('flattens a simple nested object (isTest=false)', () => {
		const nestedObj: NestedObject = {
			foo: '#000000',
			bar: {
				baz: '#ffffff',
			},
		};
		const result = flattenOptimizedTheme(nestedObj, false);
		expect(result).toEqual({
			foo: '#000000',
			baz: '#ffffff',
		});
	});

	it('only fills undefined keys with fallback color when isTest=true', () => {
		const nestedObj: NestedObject = {
			key1: '#123456',
			key2: undefined,
			group: {
				key3: undefined,
				key4: '#abcdef',
			},
		};
		const result = flattenOptimizedTheme(nestedObj, true);
		// 'key1' and 'key4' are defined => ignored in isTest mode
		// 'key2' and 'key3' are undefined => replaced with '#f007'
		expect(result).toEqual({
			key2: '#f007',
			key3: '#f007',
		});
	});

	it('handles deeply nested objects', () => {
		const nestedObj: NestedObject = {
			a: {
				b: {
					c: undefined,
					d: '#ff0000',
				},
			},
		};
		// isTest=false => we only collect defined values
		const resultFalse = flattenOptimizedTheme(nestedObj, false);
		expect(resultFalse).toEqual({
			d: '#ff0000',
		});
		// isTest=true => we only fill undefined
		const resultTrue = flattenOptimizedTheme(nestedObj, true);
		expect(resultTrue).toEqual({
			c: '#f007',
		});
	});

	it('returns an empty object when input is empty', () => {
		const resultFalse = flattenOptimizedTheme({}, false);
		expect(resultFalse).toEqual({});
		const resultTrue = flattenOptimizedTheme({}, true);
		expect(resultTrue).toEqual({});
	});

	it('copies all non-undefined strings when isTest=false', () => {
		const nestedObj: NestedObject = {
			randomString: 'hello-world',
			validHex: '#cc00cc',
		};
		const result = flattenOptimizedTheme(nestedObj, false);
		expect(result).toEqual({
			randomString: 'hello-world',
			validHex: '#cc00cc',
		});
	});

	it('replaces only undefined with fallback when isTest=true, ignoring any defined strings', () => {
		const nestedObj: NestedObject = {
			randomString: 'hello-world',
			undefVal: undefined,
			validHex: '#cc00cc',
		};
		const result = flattenOptimizedTheme(nestedObj, true);
		expect(result).toEqual({
			undefVal: '#f007',
		});
	});

	/**
	 * Extra test for handling TRANSPARENT & DEFAULT if your flatten
	 * logic also converts them:
	 */
	it('converts TRANSPARENT -> "#0000" and DEFAULT -> "default" when flattening', () => {
		// Example: if your flatten logic checks for these constants
		const nestedObj: NestedObject = {
			focusBorder: TRANSPARENT,
			'sash.hoverBorder': DEFAULT,
			panel: {
				background: TRANSPARENT,
				border: DEFAULT,
			},
		};
		const result = flattenOptimizedTheme(nestedObj, false);
		expect(result).toEqual({
			focusBorder: '#0000',
			'sash.hoverBorder': 'default',
			background: '#0000',
			border: 'default',
		});
	});
});

/**
 * ------------------------------------------------------------------
 * (Optional) Tests for internal helpers, indirectly tested above.
 * ------------------------------------------------------------------
 */
describe('Internal helpers (indirect testing)', () => {
	it('indirectly tests `generateShades` via getHEXColor (a few color names & shades)', () => {
		const colorNames: ColorName[] = ['red', 'yellow', 'blue'];
		const shadeKeys: Shade[] = [900, 50];
		colorNames.forEach((c) =>
			shadeKeys.forEach((s) => {
				const color = getHEXColor(c, s);
				expect(color).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
			}),
		);
	});

	it('indirectly tests `hexWithOpacity` by providing different opacity values', () => {
		const testOpacities = [90, 80, 70, 20];
		testOpacities.forEach((op) => {
			const color = getHEXColor('magenta', 900, op);
			const opHex = opacityLevelMap.get(op);
			expect(color.endsWith(opHex ?? '')).toBe(true);
		});
	});
});

/**
 * ------------------------------------------------------------------
 * Extended coverage examples:
 * ------------------------------------------------------------------
 */
describe('Extended coverage checks', () => {
	it('throws when colors array length is not 10', () => {
		const invalidColors = new Array(9).fill('#000000'); // Only 9
		expect(() => generateShades(invalidColors)).toThrowError(/length of 10/i);
	});

	it('overwrites keys from deeper nesting', () => {
		const nestedObj: NestedObject = {
			foo: '#111111',
			bar: {
				foo: '#222222', // same key "foo" deeper
			},
		};
		const result = flattenOptimizedTheme(nestedObj, false);
		// Typically deeper "foo" overwrites top-level "foo"
		expect(result.foo).toBe('#222222');
	});
});
