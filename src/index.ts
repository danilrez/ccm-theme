import { optimizeTheme } from './colors';
// import { tokenColors } from './colors/tokenColors';
import { customizations } from './customizations';

// const publicTheme = {
// 	name: 'CCM Night',
// 	type: 'dark',
// 	colors: optimizeTheme(customizations),
// 	tokenColors,
// };

console.log('THEME:', optimizeTheme(customizations));
