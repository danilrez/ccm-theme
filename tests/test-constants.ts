import path from 'path';

export const vscodeDir = path.resolve(process.cwd(), '.vscode');
export const settingsFile = path.join(vscodeDir, 'settings.json');

/**
 * Replace the path to settings.json with simply "~/.vscode/settings.json"
 * whenever we detect `.vscode/settings.json` at the end of the path.
 */
export const shortPathToVscodeSettings = (fullPath: string): string => {
	const searchPart = '.vscode/settings.json';
	return fullPath.endsWith(searchPart) ? `~/${searchPart}` : fullPath;
};

export const ANSIcolors = {
	// Reset
	reset: '\x1b[0m',

	// Foreground colors
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',

	// Background colors
	blackBG: '\x1b[40m',
	redBG: '\x1b[41m',
	greenBG: '\x1b[42m',
	yellowBG: '\x1b[43m',
	blueBG: '\x1b[44m',
	magentaBG: '\x1b[45m',
	cyanBG: '\x1b[46m',
	whiteBG: '\x1b[47m',
};

export const HELLO = `${ANSIcolors.cyan}
∙--------------------------------∙
| ${ANSIcolors.cyanBG} STARTING COLOR GENERATION... ${ANSIcolors.reset} ${ANSIcolors.cyan}|
∙--------------------------------∙
${ANSIcolors.reset}`;

export const GOODBYE = `${ANSIcolors.cyan}
∙-------------------∙
| ${ANSIcolors.cyanBG} GENERATION DONE ${ANSIcolors.reset} ${ANSIcolors.cyan}|
∙-------------------∙
${ANSIcolors.reset}`;
