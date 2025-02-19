// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import path from 'path';
import { flattenOptimizedTheme } from '../../src/colors';
import { tokenCustomizations, workbenchCustomizations } from '../../src/customizations';
import { ANSIcolors, HELLO, GOODBYE } from '../constants';

const { green, greenBG, yellow, yellowBG, redBG, reset } = ANSIcolors;

const themeColors = {
	'workbench.colorCustomizations': flattenOptimizedTheme(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: tokenCustomizations },
};

// Determine the absolute path to the .vscode folder relative to the working directory
const vscodeDir = path.resolve(process.cwd(), '.vscode');
const settingsFile = path.join(vscodeDir, 'settings.json');

console.log(HELLO);
console.log(`> ${yellow}Writing ${yellowBG} SET COLORS ${reset}${yellow} settings to:${reset} ${settingsFile}`);
fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(themeColors, null, 2)))
	.then(() => {
		console.log(`> ${green}File written ${reset}${greenBG} successfully ${reset}`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.warn(`${redBG}ERROR: ${reset}`, error.message);
		process.exit(1);
	});
