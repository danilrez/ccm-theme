const fs = require('fs').promises;
const { flattenOptimizedTheme } = require('../build/colors');
const { customizations } = require('../build/customizations');
const tokenColors = require('../build/colors/tokenColors');

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
	.catch((error) => process.exit(1));
