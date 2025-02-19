import { DEFAULT, TRANSPARENT, getHEXColor } from '../../colors';

// A set of colors for button widgets such as Open Folder button in the Explorer of a new window
export const buttonControl = {
	// Button background color
	'button.background': getHEXColor('violet', 400),
	// Button foreground color
	'button.foreground': getHEXColor('neutral', 50),
	// Button border color
	'button.border': TRANSPARENT,
	// Button separator color
	'button.separator': getHEXColor('neutral', 50),
	// Button background color when hovering
	'button.hoverBackground': getHEXColor('violet', 400, 60),
	// Secondary button foreground color
	'button.secondaryForeground': getHEXColor('neutral', 50),
	// Secondary button background color
	'button.secondaryBackground': getHEXColor('neutral', 500),
	// Secondary button background color when hovering
	'button.secondaryHoverBackground': getHEXColor('neutral', 400),
	// Background color of checkbox widget
	'checkbox.background': getHEXColor('neutral', 800),
	// Foreground color of checkbox widget
	'checkbox.foreground': getHEXColor('neutral', 200),
	// Border color of checkbox widget
	'checkbox.border': getHEXColor('neutral', 900),
	// Background color of checkbox widget when the element it's in is selected
	'checkbox.selectBackground': DEFAULT,
	// Border color of checkbox widget when the element it's in is selected
	'checkbox.selectBorder': DEFAULT,
};
