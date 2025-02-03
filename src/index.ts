import { flattenOptimizedTheme } from './colors';
import { tokenColors } from './colors/tokenColors';
import { customizations } from './customizations';

const publicTheme = {
	name: 'CCM Night',
	type: 'dark',
	colors: flattenOptimizedTheme(customizations),
	tokenColors,
};

console.log(JSON.stringify(publicTheme, null, 2));
