import { getColor } from '../../colors';
import { defaultColor, transparent } from '../../colors/constants';

// Find colors depend on the current find string in the Find/Replace dialog
export const findMatch = {
	// Color of the current search match
	'editor.findMatchBackground': getColor('yellow', 400, 40),
	// Text color of the current search match
	'editor.findMatchForeground': defaultColor,
	// Border color of the current search match
	'editor.findMatchBorder': getColor('yellow', 400),
	// Color of the other search matches. The color must not be opaque so as not to hide underlying decorations
	'editor.findMatchHighlightBackground': getColor('violet', 400, 40),
	// Foreground color of the other search matches
	'editor.findMatchHighlightForeground': defaultColor,
	// Border color of the other search matches
	'editor.findMatchHighlightBorder': getColor('violet', 400),
	// Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations
	'editor.findRangeHighlightBackground': getColor('violet', 400, 20),
	// Border color the range limiting the search (Enable 'Find in Selection' in the find widget)
	'editor.findRangeHighlightBorder': transparent,
	// Background color for highlighting the line at the findMatch position (`default` is equal to the color of `editor.lineHighlightBackground`)
	'editor.rangeHighlightBackground': defaultColor,
};
