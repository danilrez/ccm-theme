/**
 * The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed
 * These colors are defined by the Color Theme but can also be customized with the editor.tokenColorCustomizations setting
 * See Customizing a Color Theme for details on updating a Color Theme and the available token types
 */

<<<<<<< HEAD
import { getColor } from '../../colors';

// All other editor colors are listed here
export const editorBase = {
	// Editor background color
	'editor.background': getColor('neutral', 700),
	// Editor default foreground color
	'editor.foreground': getColor('neutral', 300),
	// Color of editor line numbers
	'editorLineNumber.foreground': getColor('neutral', 500),
	// Color of the active editor line number
	'editorLineNumber.activeForeground': getColor('neutral', 300),
=======
// All other editor colors are listed here
export const editorBase = {
	// Editor background color
	'editor.background': undefined,
	// Editor default foreground color
	'editor.foreground': undefined,
	// Color of editor line numbers
	'editorLineNumber.foreground': undefined,
	// Color of the active editor line number
	'editorLineNumber.activeForeground': undefined,
>>>>>>> af3043b (refactor)
	// Color of the final editor line when editor.renderFinalNewline is set to dimmed
	'editorLineNumber.dimmedForeground': undefined,
	// The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor
	'editorCursor.background': undefined,
	// Color of the editor cursor
<<<<<<< HEAD
	'editorCursor.foreground': getColor('yellow', 500),
	// Color of the primary editor cursor when multiple cursors are present
	'editorMultiCursor.primary.foreground': getColor('yellow', 500),
	// The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.primary.background': undefined,
	// Color of secondary editor cursors when multiple cursors are present
	'editorMultiCursor.secondary.foreground': getColor('yellow', 300),
=======
	'editorCursor.foreground': undefined,
	// Color of the primary editor cursor when multiple cursors are present
	'editorMultiCursor.primary.foreground': undefined,
	// The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.primary.background': undefined,
	// Color of secondary editor cursors when multiple cursors are present
	'editorMultiCursor.secondary.foreground': undefined,
>>>>>>> af3043b (refactor)
	// The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.secondary.background': undefined,
	// Foreground color of the placeholder text in the editor
	'editor.placeholder.foreground': undefined,

<<<<<<< HEAD
	// Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations
	'editor.hoverHighlightBackground': getColor('violet', 500, 20),

	// NOTE: The current line is typically shown as either background highlight or a border (not both)
	// Background color for the highlight of line at the cursor position
	'editor.lineHighlightBackground': getColor('neutral', 500, 20),
=======
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations
	'editor.hoverHighlightBackground': undefined,

	// NOTE: The current line is typically shown as either background highlight or a border (not both)
	// Background color for the highlight of line at the cursor position
	'editor.lineHighlightBackground': undefined,
>>>>>>> af3043b (refactor)
	// Background color for the border around the line at the cursor position
	'editor.lineHighlightBorder': undefined,

	// Foreground color for the labels in the editor watermark
	'editorWatermark.foreground': undefined,

	// The color for unicode highlights
	// Border color used to highlight unicode characters
	'editorUnicodeHighlight.border': undefined,
	// Background color used to highlight unicode characters
	'editorUnicodeHighlight.background': undefined,

	// The link color is visible when clicking on a link
<<<<<<< HEAD
	'editorLink.activeForeground': getColor('blue', 400),
=======
	'editorLink.activeForeground': undefined,
>>>>>>> af3043b (refactor)
};
