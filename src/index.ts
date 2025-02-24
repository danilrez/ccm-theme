import {
	parseCLIArgs,
	generateAllThemes,
	generateSingleTheme,
	runTestColors,
	runThemeGeneration,
	FancyText,
	HELLO,
	GOODBYE,
	ERROR_HEADER,
} from './core';

const { generateDark, generateLight, generateBoth, testMode, unsetMode } = parseCLIArgs();

console.log(HELLO);

const { red } = FancyText;
const themes = new Map<string, any>();

if (generateDark) generateSingleTheme('dark', themes, unsetMode);
if (generateLight) generateSingleTheme('light', themes, unsetMode);
if (generateBoth) generateAllThemes(themes, unsetMode);

if (!testMode) {
	runThemeGeneration(themes)
		.then(() => console.log(GOODBYE))
		.catch((error: Error) => {
			console.log(`${ERROR_HEADER} ${red(error?.message)}\n`);
			process.exit();
		});
} else {
	const type = generateDark ? 'dark' : generateLight ? 'light' : 'dark';

	runTestColors(type, themes, unsetMode)
		.then(() => console.log(GOODBYE))
		.catch((error: Error) => {
			console.log(`${ERROR_HEADER} ${red(error?.message)}\n`);
			process.exit();
		});
}
