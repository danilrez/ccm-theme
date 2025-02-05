import {
	flattenOptimizedTheme,
	// flattenOptimizedTestTheme
} from './colors';
import { tokenColors } from './colors/tokenColors';
import { customizations } from './customizations';

const publicTheme = {
	name: 'CCM Night',
	type: 'dark',
	colors: flattenOptimizedTheme(customizations),
	tokenColors,
};

// Full ready theme
console.log(JSON.stringify(publicTheme, null, 2));

// Ready colors
// console.log(JSON.stringify(flattenOptimizedTheme(customizations), null, 2));

// Testing colors
// console.log(JSON.stringify(flattenOptimizedTestTheme(customizations), null, 2));
