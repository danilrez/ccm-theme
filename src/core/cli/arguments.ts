import { FancyText } from '../fancyText';
import { ERROR_HEADER } from './utils';

const validateArgs = (dark: boolean, light: boolean, test: boolean) => {
	const { red, black, blackBG, white, whiteBG } = FancyText;

	if (dark && light) {
		console.log(`${ERROR_HEADER} ${red('Please specify only one theme type:')} ${blackBG(white('--dark')) || whiteBG(black('--light'))}\n`);
		process.exit();
	}
	if (!dark && !light && test) {
		console.log(`${ERROR_HEADER} ${red('Please specify a theme type:')} ${blackBG(white('--dark')) || whiteBG(black('--light'))}\n`);
		process.exit();
	}
};

export const parseCLIArgs = () => {
	const args = process.argv.slice(2);
	const dark = args.includes('--dark');
	const light = args.includes('--light');
	const test = args.includes('--test');
	const unset = args.includes('--unset');

	const generateDark = dark && !light;
	const generateLight = light && !dark;
	const generateBoth = !dark && !light;
	const testMode = test || unset;

	validateArgs(dark, light, testMode);

	return { generateDark, generateLight, generateBoth, testMode, unsetMode: unset ?? false };
};
