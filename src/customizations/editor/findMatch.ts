<<<<<<< HEAD
import { getColor } from '../../colors';

// Find colors depend on the current find string in the Find/Replace dialog
export const findMatch = {
	// Color of the current search match
	'editor.findMatchBackground': getColor('yellow', 500, 40),
	// Text color of the current search match
	'editor.findMatchForeground': undefined,
	// Border color of the current search match
	'editor.findMatchBorder': getColor('yellow', 500),
	// Color of the other search matches. The color must not be opaque so as not to hide underlying decorations
	'editor.findMatchHighlightBackground': getColor('violet', 500, 40),
	// Foreground color of the other search matches
	'editor.findMatchHighlightForeground': undefined,
	// Border color of the other search matches
	'editor.findMatchHighlightBorder': getColor('violet', 500),
	// Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations
	'editor.findRangeHighlightBackground': getColor('violet', 500, 20),
=======
// Find colors depend on the current find string in the Find/Replace dialog
export const findMatch = {
	// Color of the current search match
	'editor.findMatchBackground': undefined,
	// Text color of the current search match
	'editor.findMatchForeground': undefined,
	// Foreground color of the other search matches
	'editor.findMatchHighlightForeground': undefined,
	// Color of the other search matches. The color must not be opaque so as not to hide underlying decorations
	'editor.findMatchHighlightBackground': undefined,
	// Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations
	'editor.findRangeHighlightBackground': undefined,
	// Border color of the current search match
	'editor.findMatchBorder': undefined,
	// Border color of the other search matches
	'editor.findMatchHighlightBorder': undefined,
>>>>>>> af3043b (refactor)
	// Border color the range limiting the search (Enable 'Find in Selection' in the find widget)
	'editor.findRangeHighlightBorder': undefined,
};
