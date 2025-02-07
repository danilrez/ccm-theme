import { getColor } from '../colors';
import { defaultColor, transparent } from '../colors/constants';

export const debug = {
	// Debug toolbar background color
	'debugToolBar.background': getColor('neutral', 700),
	// Debug toolbar border color
	'debugToolBar.border': transparent,
	// Background color of the top stack frame highlight in the editor
	'editor.stackFrameHighlightBackground': defaultColor,
	// Background color of the focused stack frame highlight in the editor
	'editor.focusedStackFrameHighlightBackground': defaultColor,
	// Color for the debug inline value text
	'editor.inlineValuesForeground': defaultColor,
	// Color for the debug inline value background
	'editor.inlineValuesBackground': defaultColor,
	// Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
	'debugView.exceptionLabelForeground': defaultColor,
	// Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
	'debugView.exceptionLabelBackground': defaultColor,
	// Foreground color for a label in the CALL STACK view showing the current session's or thread's state
	'debugView.stateLabelForeground': defaultColor,
	// Background color for a label in the CALL STACK view showing the current session's or thread's state
	'debugView.stateLabelBackground': defaultColor,
	// Color used to highlight value changes in the debug views (such as in the Variables view)
	'debugView.valueChangedHighlight': defaultColor,
	// Foreground color for the token names shown in debug views (such as in the Variables or Watch view)
	'debugTokenExpression.name': defaultColor,
	// Foreground color for the token values shown in debug views
	'debugTokenExpression.value': defaultColor,
	// Foreground color for strings in debug views
	'debugTokenExpression.string': defaultColor,
	// Foreground color for booleans in debug views
	'debugTokenExpression.boolean': defaultColor,
	// Foreground color for numbers in debug views
	'debugTokenExpression.number': defaultColor,
	// Foreground color for expression errors in debug views
	'debugTokenExpression.error': defaultColor,
	// Foreground color for the token types shown in the debug views (ie. the Variables or Watch view)
	'debugTokenExpression.type': defaultColor,
};
