import { tokenCustomizations, workbenchCustomizations } from '../../customizations';
import { resolveSyntaxTokens } from './resolveSyntaxTokens';
import { resolveWorkbenchTokens } from './resolveWorkbenchTokens';
import { DONE, START } from '../cli';

export type ThemeType = 'dark' | 'light';
export type ThemeDescriptor = { name: string; type: ThemeType; unsetMode?: boolean };

export const generateTheme = ({ name, type, unsetMode }: ThemeDescriptor) => {
	console.log(START(name));

	const theme = {
		name,
		type,
		semanticHighlighting: true,
		colors: resolveWorkbenchTokens(type, workbenchCustomizations, unsetMode),
		tokenColors: resolveSyntaxTokens(type, tokenCustomizations),
	};

	console.log(DONE);

	return theme;
};
