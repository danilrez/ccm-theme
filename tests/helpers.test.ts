import { describe, it, expect } from 'vitest';
import { flattenOptimizedTheme, getHEXColor } from '../src/colors';
import { opacityLevelMap } from '../src/colors/constants';

/**
 * Test suite for `getHEXColor`.
 */
describe('getHEXColor()', () => {
	it('should return a valid HEX color for a known colorName and shade', () => {
		// For example, "red" with shade 900.
		const color = getHEXColor('red', 900);
		expect(color).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
	});

	it('should append opacity when provided', () => {
		// Suppose we use opacity = 50 and know the appended code from opacityLevelMap
		const colorWithOpacity = getHEXColor('red', 900, 50);
		const opacityHex = opacityLevelMap.get(50); // e.g. "80"
		expect(colorWithOpacity).toContain(opacityHex);
	});

	it('should throw an error if colorName is invalid', () => {
		// @ts-expect-error Testing invalid color name
		expect(() => getHEXColor('unknown', 900)).toThrowError();
	});

	it('should throw an error if shade is invalid', () => {
		// @ts-expect-error Testing invalid shade
		expect(() => getHEXColor('red', 999)).toThrowError();
	});

	it('should throw an error if opacity is invalid', () => {
		expect(() => getHEXColor('red', 900, 999)).toThrowError();
	});
});

/**
 * Test suite for `flattenOptimizedTheme()`.
 */
describe('flattenOptimizedTheme()', () => {
	it('should flatten a simple nested object (isTest=false)', () => {
		const nestedObj = {
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

	it('should only fill undefined keys with fallback color when isTest=true', () => {
		const nestedObj = {
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

	it('should handle deeply nested objects', () => {
		const nestedObj = {
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
});

/**
 * (Optional) Tests for internal helper logic.
 * If you want direct tests for `hexWithOpacity`, `generateColor`, `generateShades`,
 * consider exporting them from your helpers file or test them indirectly.
 */
describe('Internal helpers (indirect testing)', () => {
	it('indirectly tests `hexWithOpacity` via getHEXColor', () => {
		// If we know getHEXColor uses hexWithOpacity for opacity
		const color = getHEXColor('blue', 500, 20);
		const opacityHex = opacityLevelMap.get(20) as string; // e.g. '33'
		expect(color.endsWith(opacityHex)).toBe(true);
	});

	it('indirectly tests `generateColor` and `generateShades` via getHEXColor', () => {
		// If getHEXColor('green', 900) returns a valid color,
		// we know generateShades must have succeeded in producing that shade.
		const color = getHEXColor('green', 900);
		expect(color).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
	});
});
