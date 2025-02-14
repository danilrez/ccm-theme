// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { flattenOptimizedTheme } from '../colors';
import { customizations } from '../customizations';

const nightThemeColors = flattenOptimizedTheme(customizations);
// const daylightThemeColors = flattenOptimizedTheme(customizations);

// Write themes
fs.mkdir('./src/tests/outDir', { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile('./src/tests/outDir/test-night-colors.json', JSON.stringify(nightThemeColors, null, 2)),
			// fs.writeFile('./src/tests/outDir/test-daylight-colors.json', JSON.stringify(daylightThemeColors, null, 2)),
		]),
	)
	.catch((error: Error) => {
		console.warn('ERROR:', error);
		process.exit(1);
	});
