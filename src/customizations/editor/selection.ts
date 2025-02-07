import { getColor } from '../../colors';
import { defaultColor } from '../../colors/constants';

/**
 * Selection colors are visible when selecting one or more characters
 * In addition to the selection also all regions with the same content are highlighted
 */
export const selectionHighlight = {
	// Color of the editor selection
	'editor.selectionBackground': getColor('neutral', 600),
	// Color of the selected text for high contrast
	'editor.selectionForeground': defaultColor,
	// Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations
	'editor.inactiveSelectionBackground': getColor('neutral', 600, 80),
	// Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations
	'editor.selectionHighlightBackground': getColor('violet', 400, 30),
	// Border color for regions with the same content as the selection
	'editor.selectionHighlightBorder': getColor('violet', 400),
};
