// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { flattenOptimizedTheme } from '../colors';
import { tokenCustomizations, workbenchCustomizations } from '../customizations';

const themeColors = {
	'workbench.colorCustomizations': flattenOptimizedTheme(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: tokenCustomizations },
};

fs.mkdir('./src/tests/outDir', { recursive: true })
	.then(() => Promise.all([fs.writeFile('./src/tests/outDir/settings.json', JSON.stringify(themeColors, null, 2))]))
	.catch((error: Error) => {
		console.warn('ERROR:', error);
		process.exit(1);
	});
