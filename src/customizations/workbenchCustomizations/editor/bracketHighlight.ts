import { getColor } from '../../../colors';

export const bracketHighlight = {
	'editorBracketHighlight.foreground1': getColor('yellow', 400),
	'editorBracketHighlight.foreground2': getColor('magenta', 400),
	'editorBracketHighlight.foreground3': getColor('cyan', 400),
	'editorBracketHighlight.foreground4': getColor('yellow', 300),
	'editorBracketHighlight.foreground5': getColor('magenta', 300),
	'editorBracketHighlight.foreground6': getColor('cyan', 300),
	'editorBracketPairGuide.activeBackground1': getColor('yellow', 400),
	'editorBracketPairGuide.activeBackground2': getColor('magenta', 400),
	'editorBracketPairGuide.activeBackground3': getColor('cyan', 400),
	'editorBracketPairGuide.activeBackground4': getColor('yellow', 300),
	'editorBracketPairGuide.activeBackground5': getColor('magenta', 300),
	'editorBracketPairGuide.activeBackground6': getColor('cyan', 300),
	'editorBracketHighlight.unexpectedBracket.foreground': getColor('red', 500),
	// Color of the selected Bracket
	'editorBracketMatch.background': getColor('yellow', 400, 40),
	'editorBracketMatch.border': getColor('yellow', 400),
};
