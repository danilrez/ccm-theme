import { promises as fs } from 'fs';
import { flattenOptimizedTheme } from './colors';
import { tokenCustomizations, workbenchCustomizations } from './customizations';

const nightTheme = {
	name: 'Crappy Night',
	type: 'dark',
	semanticHighlighting: true,
	colors: flattenOptimizedTheme(workbenchCustomizations),
	tokenColors: tokenCustomizations,
};

const daylightTheme = {
	name: 'Crappy Night',
	type: 'light',
	semanticHighlighting: true,
	colors: flattenOptimizedTheme(workbenchCustomizations),
	tokenColors: tokenCustomizations,
};

// Write themes
fs.mkdir('./public/themes', { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile('./public/themes/crappy-night-theme.json', JSON.stringify(nightTheme, null, 2)),
			fs.writeFile('./public/themes/crappy-daylight-theme.json', JSON.stringify(daylightTheme, null, 2)),
		]),
	)
	.catch((error: Error) => {
		console.warn('ERROR:', error);
		process.exit(1);
	});
``;
