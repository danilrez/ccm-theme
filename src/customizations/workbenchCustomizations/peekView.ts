import { getHEXColor } from '../../colors';

// Peek views are used to show references and declarations as a view inside the editor
export const peekView = {
	// Color of the peek view borders and arrow
	'peekView.border': getHEXColor('neutral', 900),
	// Background color of the peek view editor
	'peekViewEditor.background': getHEXColor('neutral', 800, 60),
	// Background color of the gutter in the peek view editor
	'peekViewEditorGutter.background': getHEXColor('neutral', 800, 60),
	// Match highlight color in the peek view editor
	'peekViewEditor.matchHighlightBackground': getHEXColor('yellow', 400, 40),
	// Match highlight border color in the peek view editor
	'peekViewEditor.matchHighlightBorder': getHEXColor('yellow', 400),
	// Background color of sticky scroll in the peek view editor
	'peekViewEditorStickyScroll.background': getHEXColor('neutral', 800, 80),
	// Background color of the peek view result list
	'peekViewResult.background': getHEXColor('neutral', 800),
	// // Foreground color for file nodes in the peek view result list
	'peekViewResult.fileForeground': getHEXColor('neutral', 200),
	// Foreground color for line nodes in the peek view result list
	'peekViewResult.lineForeground': getHEXColor('neutral', 300),
	// Match highlight color in the peek view result list
	'peekViewResult.matchHighlightBackground': getHEXColor('violet', 400, 40),
	// Background color of the selected entry in the peek view result list
	'peekViewResult.selectionBackground': getHEXColor('violet', 400, 40),
	// Foreground color of the selected entry in the peek view result list
	'peekViewResult.selectionForeground': getHEXColor('neutral', 100),
	// Background color of the peek view title area
	'peekViewTitle.background': getHEXColor('neutral', 800),
	// Color of the peek view title info
	'peekViewTitleDescription.foreground': getHEXColor('neutral', 500),
	// Color of the peek view title
	'peekViewTitleLabel.foreground': getHEXColor('neutral', 200),
};
