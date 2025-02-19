import { DEFAULT, getHEXColor } from '../../colors';

// Colors for input controls such as in the Search view or the Find/Replace dialog
export const inputControl = {
	// Input box background
	'input.background': getHEXColor('neutral', 600),
	// Input box border
	'input.border': getHEXColor('neutral', 900),
	// Input box foreground
	'input.foreground': getHEXColor('neutral', 300),
	// Input box foreground color for placeholder text
	'input.placeholderForeground': getHEXColor('neutral', 500),
	// Background color of activated options in input fields
	'inputOption.activeBackground': getHEXColor('violet', 400, 40),
	// Border color of activated options in input fields
	'inputOption.activeBorder': getHEXColor('violet', 400),
	// Foreground color of activated options in input fields
	'inputOption.activeForeground': DEFAULT,
	// Background color of activated options in input fields
	'inputOption.hoverBackground': DEFAULT,
	// Input validation background color for error severity
	'inputValidation.errorBackground': getHEXColor('red', 800),
	// Input validation foreground color for error severity
	'inputValidation.errorForeground': getHEXColor('neutral', 100),
	// Input validation border color for error severity
	'inputValidation.errorBorder': getHEXColor('red', 500),
	// Input validation background color for information severity
	'inputValidation.infoBackground': getHEXColor('blue', 800),
	// Input validation foreground color for information severity
	'inputValidation.infoForeground': getHEXColor('neutral', 100),
	// Input validation border color for information severity
	'inputValidation.infoBorder': getHEXColor('blue', 500),
	// Input validation background color for information warning
	'inputValidation.warningBackground': getHEXColor('yellow', 800),
	// Input validation foreground color for warning severity
	'inputValidation.warningForeground': getHEXColor('neutral', 100),
	// Input validation border color for warning severity
	'inputValidation.warningBorder': getHEXColor('yellow', 500),
};
