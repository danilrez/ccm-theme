/**
 * The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed
 * These colors are defined by the Color Theme but can also be customized with the editor.tokenColorCustomizations setting
 * See Customizing a Color Theme for details on updating a Color Theme and the available token types
 */

// All other editor colors are listed here
export const editorBase = {
	// Editor background color
	'editor.background': '#f00',
	// Editor default foreground color
	'editor.foreground': '#f00',
	// Color of editor line numbers
	'editorLineNumber.foreground': '#f00',
	// Color of the active editor line number
	'editorLineNumber.activeForeground': '#f00',
	// Color of the final editor line when editor.renderFinalNewline is set to dimmed
	'editorLineNumber.dimmedForeground': '#f00',
	// The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor
	'editorCursor.background': '#f00',
	// Color of the editor cursor
	'editorCursor.foreground': '#f00',
	// Color of the primary editor cursor when multiple cursors are present
	'editorMultiCursor.primary.foreground': '#f00',
	// The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.primary.background': '#f00',
	// Color of secondary editor cursors when multiple cursors are present
	'editorMultiCursor.secondary.foreground': '#f00',
	// The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor
	'editorMultiCursor.secondary.background': '#f00',
	// Foreground color of the placeholder text in the editor
	'editor.placeholder.foreground': '#f00',

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations
	'editor.hoverHighlightBackground': '#f00',

	// NOTE: The current line is typically shown as either background highlight or a border (not both)
	// Background color for the highlight of line at the cursor position
	'editor.lineHighlightBackground': '#f00',
	// Background color for the border around the line at the cursor position
	'editor.lineHighlightBorder': '#f00',

	// Foreground color for the labels in the editor watermark
	'editorWatermark.foreground': '#f00',

	// The color for unicode highlights
	// Border color used to highlight unicode characters
	'editorUnicodeHighlight.border': '#f00',
	// Background color used to highlight unicode characters
	'editorUnicodeHighlight.background': '#f00',

	// The link color is visible when clicking on a link
	'editorLink.activeForeground': '#f00',
};
