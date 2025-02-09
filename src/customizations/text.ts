import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// Colors inside a text document, such as the welcome page
export const text = {
	// Background color for block quotes in text
	'textBlockQuote.background': getColor('neutral', 600),
	// Border color for block quotes in text
	'textBlockQuote.border': getColor('neutral', 500),
	// Background color for code blocks in text
	'textCodeBlock.background': getColor('neutral', 800),
	// Foreground color for links in text when clicked on and on mouse hover
	'textLink.activeForeground': getColor('blue', 500),
	// Foreground color for links in text
	'textLink.foreground': getColor('blue', 400),
	// Foreground color for preformatted text segments
	'textPreformat.foreground': getColor('yellow', 300),
	// Background color for preformatted text segments
	'textPreformat.background': getColor('neutral', 600),
	// Color for text separators
	'textSeparator.foreground': defaultColor,
};
