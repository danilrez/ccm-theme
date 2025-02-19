// TODO: find this

import { getHEXColor } from '../../colors';

// The theme colors for snippets
export const snippets = {
	// Highlight background color of a snippet tabstop
	'editor.snippetTabstopHighlightBackground': getHEXColor('neutral', 500, 40),
	// Highlight border color of a snippet tabstop
	'editor.snippetTabstopHighlightBorder': getHEXColor('neutral', 300),
	// Highlight background color of the final tabstop of a snippet
	'editor.snippetFinalTabstopHighlightBackground': getHEXColor('neutral', 500, 40),
	// Highlight border color of the final tabstop of a snippet
	'editor.snippetFinalTabstopHighlightBorder': getHEXColor('neutral', 300),
};
