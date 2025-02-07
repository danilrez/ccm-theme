import { getColor } from '../colors';

// Peek views are used to show references and declarations as a view inside the editor
export const peekView = {
	// Color of the peek view borders and arrow
	'peekView.border': getColor('neutral', 900),
	// Background color of the peek view editor
	'peekViewEditor.background': getColor('neutral', 800, 60),
	// Background color of the gutter in the peek view editor
	'peekViewEditorGutter.background': getColor('neutral', 800, 60),
	// Match highlight color in the peek view editor
	'peekViewEditor.matchHighlightBackground': getColor('yellow', 400, 40),
	// Match highlight border color in the peek view editor
	'peekViewEditor.matchHighlightBorder': getColor('yellow', 400),
	// Background color of sticky scroll in the peek view editor
	'peekViewEditorStickyScroll.background': getColor('neutral', 800, 80),
	// Background color of the peek view result list
	'peekViewResult.background': getColor('neutral', 800),
	// Foreground color for file nodes in the peek view result list
	'peekViewResult.fileForeground': getColor('neutral', 300),
	// Foreground color for line nodes in the peek view result list
	'peekViewResult.lineForeground': getColor('neutral', 300),
	// Match highlight color in the peek view result list
	'peekViewResult.matchHighlightBackground': getColor('violet', 400, 40),
	// Background color of the selected entry in the peek view result list
	'peekViewResult.selectionBackground': getColor('violet', 400, 40),
	// Foreground color of the selected entry in the peek view result list
	'peekViewResult.selectionForeground': getColor('neutral', 100),
	// Background color of the peek view title area
	'peekViewTitle.background': getColor('neutral', 800),
	// Color of the peek view title info
	'peekViewTitleDescription.foreground': getColor('neutral', 500),
	// Color of the peek view title
	'peekViewTitleLabel.foreground': getColor('neutral', 300),
};
