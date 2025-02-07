import { getColor } from '../colors';
import { transparent } from '../colors/constants';

// A set of colors for button widgets such as Open Folder button in the Explorer of a new window
export const buttonControl = {
	// Button background color
	'button.background': getColor('violet', 400),
	// Button foreground color
	'button.foreground': getColor('neutral', 50),
	// Button border color
	'button.border': transparent,
	// Button separator color
	'button.separator': getColor('neutral', 100),
	// Button background color when hovering
	'button.hoverBackground': getColor('violet', 400, 70),
	// Secondary button foreground color
	'button.secondaryForeground': getColor('neutral', 800),
	// Secondary button background color
	'button.secondaryBackground': getColor('green', 400, 70),
	// Secondary button background color when hovering
	'button.secondaryHoverBackground': getColor('green', 400, 70),
	// Background color of checkbox widget
	'checkbox.background': getColor('neutral', 800),
	// Foreground color of checkbox widget
	'checkbox.foreground': getColor('neutral', 300),
	// Border color of checkbox widget
	'checkbox.border': getColor('neutral', 900),
	// Background color of checkbox widget when the element it's in is selected
	'checkbox.selectBackground': undefined,
	// Border color of checkbox widget when the element it's in is selected
	'checkbox.selectBorder': undefined,
};
