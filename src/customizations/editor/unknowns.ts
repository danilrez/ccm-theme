import { getColor } from '../../colors';

export const temporaryUnknowns = {
	// Wavy underline for errors in the code
	'editorError.foreground': getColor('red', 500),
	// Wavy underline for info messages or non-English text (e.g., Russian)
	'editorInfo.foreground': getColor('blue', 500),
	// Wavy underline for warnings in the code
	'editorWarning.foreground': getColor('yellow', 500),
	// Color of active indentation guides (overridden by bracket colors)
	'editorIndentGuide.activeBackground1': getColor('neutral', 400),
	// Color of indentation guides
	'editorIndentGuide.background1': getColor('neutral', 500),
	// Color of spaces and tabs
	'editorWhitespace.foreground': getColor('neutral', 500),
};
