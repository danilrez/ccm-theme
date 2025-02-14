import { getColor } from '../../colors';
import { defaultColor } from '../../colors/constants';

/**
 * Word highlight colors are visible when the cursor is inside a symbol or a word
 * Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors
 * If document symbol language support is not available, this falls back to word highlighting
 */
export const wordHighlight = {
	// Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations
	'editor.wordHighlightBackground': getColor('violet', 400, 30),
	// Border color of a symbol during read-access, for example when reading a variable
	'editor.wordHighlightBorder': getColor('violet', 400),
	// Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations
	'editor.wordHighlightStrongBackground': getColor('violet', 400, 30),
	// Border color of a symbol during write-access, for example when writing to a variable
	'editor.wordHighlightStrongBorder': getColor('violet', 400),
	// Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations
	'editor.wordHighlightTextBackground': defaultColor,
	// Border color of a textual occurrence for a symbol
	'editor.wordHighlightTextBorder': defaultColor,
};
