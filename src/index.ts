import { promises as fs } from 'fs';
import { flattenOptimizedTheme } from './colors';
import { customizations } from './customizations';
import { tokenColors } from './colors/tokenColors';

const nightTheme = {
	name: 'CCM Night',
	type: 'dark',
	semanticHighlighting: true,
	colors: flattenOptimizedTheme(customizations),
	tokenColors,
};

const daylightTheme = {
	name: 'CCM Night',
	type: 'light',
	semanticHighlighting: true,
	colors: flattenOptimizedTheme(customizations),
	tokenColors,
};

// Write themes
fs.mkdir('./public/themes', { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile('./public/themes/ccm-night-theme.json', JSON.stringify(nightTheme, null, 2)),
			fs.writeFile('./public/themes/ccm-daylight-theme.json', JSON.stringify(daylightTheme, null, 2)),
		]),
	)
	.catch((error: Error) => {
		console.warn('ERROR:', error);
		process.exit(1);
	});
