import { optimizeTheme } from './colors';
<<<<<<< HEAD
// import { tokenColors } from './colors/tokenColors';
import { customizations } from './customizations';

// const publicTheme = {
// 	name: 'CCM Night',
// 	type: 'dark',
// 	colors: optimizeTheme(customizations),
// 	tokenColors,
// };

console.log('THEME:', optimizeTheme(customizations));
=======
import { customizations } from './customizations';

const publicTheme = optimizeTheme(customizations);

console.log('publicTheme', publicTheme);
>>>>>>> af3043b (refactor)
