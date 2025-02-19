/**
 * The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed
 * These colors are defined by the Color Theme but can also be customized with the editor.tokenColorCustomizations setting
 * See Customizing a Color Theme for details on updating a Color Theme and the available token types
 */

import { DEFAULT, getColor, TRANSPARENT } from '../../../colors';

// All other editor colors are listed here
export const editorBase = {
	// Editor background color
	'editor.background': getColor('neutral', 700),
	// Editor default foreground color
	'editor.foreground': getColor('neutral', 300),
	// The background color of the editor line numbers
	'editorGutter.background': getColor('neutral', 700),
	// Color of editor line numbers
	'editorLineNumber.foreground': getColor('neutral', 500),
	// Color of the active editor line number
	'editorLineNumber.activeForeground': getColor('neutral', 100),
	// Color of the final editor line when editor.renderFinalNewline is set to dimmed
	'editorLineNumber.dimmedForeground': DEFAULT,
	// The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor
	'editorCursor.background': DEFAULT,
	// Color of the editor cursor
	'editorCursor.foreground': getColor('yellow', 400),
	// Color of the primary editor cursor when multiple cursors are present
	'editorMultiCursor.primary.foreground': getColor('yellow', 400),
	// The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.primary.background': DEFAULT,
	// Color of secondary editor cursors when multiple cursors are present
	'editorMultiCursor.secondary.foreground': getColor('yellow', 300),
	// The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.secondary.background': DEFAULT,
	// Foreground color of the placeholder text in the editor
	'editor.placeholder.foreground': DEFAULT,

	// Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations
	'editor.hoverHighlightBackground': getColor('neutral', 600, 90),

	// NOTE: The current line is typically shown as either background highlight or a border (not both)
	// Background color for the highlight of line at the cursor position
	'editor.lineHighlightBackground': getColor('neutral', 600),
	// Background color for the border around the line at the cursor position
	'editor.lineHighlightBorder': TRANSPARENT,

	// Foreground color for the labels in the editor watermark
	'editorWatermark.foreground': DEFAULT,

	// The color for unicode highlights
	// Border color used to highlight unicode characters
	'editorUnicodeHighlight.border': DEFAULT,
	// Background color used to highlight unicode characters
	'editorUnicodeHighlight.background': DEFAULT,

	// The link color is visible when clicking on a link
	'editorLink.activeForeground': getColor('blue', 400),

	// Background color used to highlight collapsed line of code
	'editor.foldBackground': getColor('neutral', 500, 40),

	// Wavy underline for errors in the code
	'editorError.foreground': getColor('red', 400),
	// Wavy underline for info messages or non-English text (e.g., Russian)
	'editorInfo.foreground': getColor('blue', 400),
	// Wavy underline for warnings in the code
	'editorWarning.foreground': getColor('yellow', 400),
	// Color of active indentation guides (overridden by bracket colors)
	'editorIndentGuide.activeBackground1': getColor('neutral', 400),
	// Color of indentation guides
	'editorIndentGuide.background1': getColor('neutral', 500),
	// Color of spaces and tabs
	'editorWhitespace.foreground': getColor('neutral', 500),
	// Color of the text with author of changes
	'editorCodeLens.foreground': getColor('neutral', 500),
};
