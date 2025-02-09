// 👉 Get UNSET colors for manual UI testing
import { promises as fs } from 'fs';
import { flattenOptimizedTestTheme } from '../colors';
import { customizations } from '../customizations';

const nightThemeColors = flattenOptimizedTestTheme(customizations);
// const daylightThemeColors = flattenOptimizedTestTheme(customizations);

// Write themes
fs.mkdir('./src/tests/outDir', { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile('./src/tests/outDir/test-unset-night-colors.json', JSON.stringify(nightThemeColors, null, 2)),
			// fs.writeFile('./src/tests/outDir/test-unset-daylight-colors.json', JSON.stringify(daylightThemeColors, null, 2)),
		]),
	)
	.catch((error: Error) => {
		console.warn('ERROR:', error);
		process.exit(1);
	});
