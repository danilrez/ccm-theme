import { getHEXColor } from '../../../colors';

export const bracketHighlight = {
	'editorBracketHighlight.foreground1': getHEXColor('yellow', 400),
	'editorBracketHighlight.foreground2': getHEXColor('magenta', 400),
	'editorBracketHighlight.foreground3': getHEXColor('cyan', 400),
	'editorBracketHighlight.foreground4': getHEXColor('yellow', 300),
	'editorBracketHighlight.foreground5': getHEXColor('magenta', 300),
	'editorBracketHighlight.foreground6': getHEXColor('cyan', 300),
	'editorBracketPairGuide.activeBackground1': getHEXColor('yellow', 400),
	'editorBracketPairGuide.activeBackground2': getHEXColor('magenta', 400),
	'editorBracketPairGuide.activeBackground3': getHEXColor('cyan', 400),
	'editorBracketPairGuide.activeBackground4': getHEXColor('yellow', 300),
	'editorBracketPairGuide.activeBackground5': getHEXColor('magenta', 300),
	'editorBracketPairGuide.activeBackground6': getHEXColor('cyan', 300),
	'editorBracketHighlight.unexpectedBracket.foreground': getHEXColor('red', 500),
	// Color of the selected Bracket
	'editorBracketMatch.background': getHEXColor('yellow', 400, 40),
	'editorBracketMatch.border': getHEXColor('yellow', 400),
};
