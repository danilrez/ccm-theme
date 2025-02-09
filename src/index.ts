import { flattenOptimizedTheme } from './colors';
import { tokenColors } from './colors/tokenColors';
import { customizations } from './customizations';

const publicNightTheme = {
	name: 'CCM Night',
	type: 'dark',
	colors: flattenOptimizedTheme(customizations),
	tokenColors,
};

// Full ready theme
console.log(JSON.stringify(publicNightTheme, null, 2));
