import { promises as fs } from 'fs';
import path from 'path';
import { FancyText } from '../fancyText';
import { releaseDir, vscodeDir, settingsFile, shortPathToVscodeSettings, ERROR_HEADER } from './utils';
import { generateTheme, ThemeDescriptor, ThemeType } from '../theme';

const crappyNight: ThemeDescriptor = { name: 'Crappy Night', type: 'dark' };
const crappyDaylight: ThemeDescriptor = { name: 'Crappy Daylight', type: 'light' };

export const generateAllThemes = (themes: Map<string, any>, unsetMode: boolean) => {
	themes.set('dark', generateTheme({ ...crappyNight, unsetMode }));
	themes.set('light', generateTheme({ ...crappyDaylight, unsetMode }));
};

export const generateSingleTheme = (type: ThemeType, themes: Map<string, any>, unsetMode: boolean) =>
	themes.set(type, generateTheme({ ...(type === 'dark' ? crappyNight : crappyDaylight), unsetMode }));

export const runThemeGeneration = async (themes: Map<string, any>) => {
	const { red } = FancyText;

	try {
		await fs.mkdir(releaseDir, { recursive: true });
		await Promise.all([
			themes.has('dark') && fs.writeFile(path.join(releaseDir, 'crappy-night-theme.json'), JSON.stringify(themes.get('dark'), null, 2)),
			themes.has('light') && fs.writeFile(path.join(releaseDir, 'crappy-daylight-theme.json'), JSON.stringify(themes.get('light'), null, 2)),
		]);
	} catch (error: any) {
		console.log(`${ERROR_HEADER} ${red(error?.message)}\n`);
		process.exit();
	}
};

export const runTestColors = async (type: ThemeType, themes: Map<string, any>, testUnsetMode: boolean) => {
	const { red, cyan } = FancyText;

	try {
		const themeTestColors = {
			'workbench.colorCustomizations': themes.get(type)?.colors,
			'editor.tokenColorCustomizations': {
				textMateRules: !testUnsetMode ? themes.get(type)?.tokenColors : [],
			},
		};

		await fs.mkdir(vscodeDir, { recursive: true });
		await fs.writeFile(settingsFile, JSON.stringify(themeTestColors, null, 2));

		console.log(`${cyan('Test file is located at:')} ${shortPathToVscodeSettings(settingsFile)}\n`);
	} catch (error: any) {
		console.log(`${ERROR_HEADER} ${red(error?.message)}\n`);
		process.exit();
	}
};
