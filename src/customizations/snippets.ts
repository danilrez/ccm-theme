// TODO: find this

import { getColor } from '../colors';

// The theme colors for snippets
export const snippets = {
	// Highlight background color of a snippet tabstop
	'editor.snippetTabstopHighlightBackground': getColor('neutral', 500, 40),
	// Highlight border color of a snippet tabstop
	'editor.snippetTabstopHighlightBorder': getColor('neutral', 300),
	// Highlight background color of the final tabstop of a snippet
	'editor.snippetFinalTabstopHighlightBackground': getColor('neutral', 500, 40),
	// Highlight border color of the final tabstop of a snippet
	'editor.snippetFinalTabstopHighlightBorder': getColor('neutral', 300),
};
