// 👉 Get UNSET colors for manual UI testing
import { promises as fs } from 'fs';
import { flattenOptimizedTestTheme } from '../colors';
import { workbenchCustomizations } from '../customizations';

const unsetThemeColors = {
	'workbench.colorCustomizations': flattenOptimizedTestTheme(workbenchCustomizations),
};

fs.mkdir('./src/tests/outDir', { recursive: true })
	.then(() => Promise.all([fs.writeFile('./src/tests/outDir/test-unset-theme-colors.json', JSON.stringify(unsetThemeColors, null, 2))]))
	.catch((error: Error) => {
		console.warn('ERROR:', error);
		process.exit(1);
	});
