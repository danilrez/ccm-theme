<<<<<<< HEAD
<<<<<<< HEAD
import { getColor } from '../../colors';

=======
>>>>>>> af3043b (refactor)
=======
import { getColor } from '../../colors';

>>>>>>> 5edd62f (step2)
/**
 * Selection colors are visible when selecting one or more characters
 * In addition to the selection also all regions with the same content are highlighted
 */
export const selectionHighlight = {
	// Color of the editor selection
<<<<<<< HEAD
<<<<<<< HEAD
	'editor.selectionBackground': getColor('neutral', 600),
	// Color of the selected text for high contrast
	'editor.selectionForeground': undefined,
	// Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations
	'editor.inactiveSelectionBackground': getColor('neutral', 600, 80),
	// Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations
	'editor.selectionHighlightBackground': undefined,
	// Border color for regions with the same content as the selection
	'editor.selectionHighlightBorder': getColor('violet', 500),
=======
	'editor.selectionBackground': undefined,
=======
	'editor.selectionBackground': getColor('neutral', 600),
>>>>>>> 5edd62f (step2)
	// Color of the selected text for high contrast
	'editor.selectionForeground': undefined,
	// Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations
	'editor.inactiveSelectionBackground': getColor('neutral', 600, 80),
	// Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations
	'editor.selectionHighlightBackground': undefined,
	// Border color for regions with the same content as the selection
<<<<<<< HEAD
	'editor.selectionHighlightBorder': undefined,
>>>>>>> af3043b (refactor)
=======
	'editor.selectionHighlightBorder': getColor('violet', 500),
>>>>>>> 5edd62f (step2)
};
