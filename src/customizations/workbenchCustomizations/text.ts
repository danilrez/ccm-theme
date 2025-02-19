import { DEFAULT, getHEXColor } from '../../colors';

// Colors inside a text document, such as the welcome page
export const text = {
	// Background color for block quotes in text
	'textBlockQuote.background': getHEXColor('neutral', 600),
	// Border color for block quotes in text
	'textBlockQuote.border': getHEXColor('neutral', 500),
	// Background color for code blocks in text
	'textCodeBlock.background': getHEXColor('neutral', 800),
	// Foreground color for links in text when clicked on and on mouse hover
	'textLink.activeForeground': getHEXColor('blue', 500),
	// Foreground color for links in text
	'textLink.foreground': getHEXColor('blue', 400),
	// Foreground color for preformatted text segments
	'textPreformat.foreground': getHEXColor('yellow', 300),
	// Background color for preformatted text segments
	'textPreformat.background': getHEXColor('neutral', 600),
	// Color for text separators
	'textSeparator.foreground': DEFAULT,
};
