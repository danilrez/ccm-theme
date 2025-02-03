import { getColor } from '../colors';

// A set of colors for button widgets such as Open Folder button in the Explorer of a new window
export const buttonControl = {
	// Button background color
	'button.background': getColor('violet', 500),
	// Button foreground color
	'button.foreground': undefined,
	// Button border color
	'button.border': undefined,
	// Button separator color
	'button.separator': undefined,
	// Button background color when hovering
	'button.hoverBackground': getColor('violet', 500, 80),
	// Secondary button foreground color
	'button.secondaryForeground': undefined,
	// Secondary button background color
	'button.secondaryBackground': undefined,
	// Secondary button background color when hovering
	'button.secondaryHoverBackground': undefined,
	// Background color of checkbox widget
	'checkbox.background': undefined,
	// Foreground color of checkbox widget
	'checkbox.foreground': undefined,
	// Border color of checkbox widget
	'checkbox.border': undefined,
	// Background color of checkbox widget when the element it's in is selected
	'checkbox.selectBackground': undefined,
	// Border color of checkbox widget when the element it's in is selected
	'checkbox.selectBorder': undefined,
};
