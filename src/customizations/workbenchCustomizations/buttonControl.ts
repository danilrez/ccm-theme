import { DEFAULT, getColor, TRANSPARENT } from '../../colors';

// A set of colors for button widgets such as Open Folder button in the Explorer of a new window
export const buttonControl = {
	// Button background color
	'button.background': getColor('violet', 400),
	// Button foreground color
	'button.foreground': getColor('neutral', 50),
	// Button border color
	'button.border': TRANSPARENT,
	// Button separator color
	'button.separator': getColor('neutral', 50),
	// Button background color when hovering
	'button.hoverBackground': getColor('violet', 500),
	// Secondary button foreground color
	'button.secondaryForeground': getColor('neutral', 50),
	// Secondary button background color
	'button.secondaryBackground': getColor('neutral', 500),
	// Secondary button background color when hovering
	'button.secondaryHoverBackground': getColor('neutral', 400),
	// Background color of checkbox widget
	'checkbox.background': getColor('neutral', 800),
	// Foreground color of checkbox widget
	'checkbox.foreground': getColor('neutral', 200),
	// Border color of checkbox widget
	'checkbox.border': getColor('neutral', 900),
	// Background color of checkbox widget when the element it's in is selected
	'checkbox.selectBackground': DEFAULT,
	// Border color of checkbox widget when the element it's in is selected
	'checkbox.selectBorder': DEFAULT,
};
