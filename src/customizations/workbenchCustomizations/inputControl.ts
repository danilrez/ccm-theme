import { DEFAULT, getColor } from '../../colors';

// Colors for input controls such as in the Search view or the Find/Replace dialog
export const inputControl = {
	// Input box background
	'input.background': getColor('neutral', 600),
	// Input box border
	'input.border': getColor('neutral', 900),
	// Input box foreground
	'input.foreground': getColor('neutral', 300),
	// Input box foreground color for placeholder text
	'input.placeholderForeground': getColor('neutral', 500),
	// Background color of activated options in input fields
	'inputOption.activeBackground': getColor('violet', 400, 40),
	// Border color of activated options in input fields
	'inputOption.activeBorder': getColor('violet', 400),
	// Foreground color of activated options in input fields
	'inputOption.activeForeground': DEFAULT,
	// Background color of activated options in input fields
	'inputOption.hoverBackground': DEFAULT,
	// Input validation background color for error severity
	'inputValidation.errorBackground': getColor('red', 800),
	// Input validation foreground color for error severity
	'inputValidation.errorForeground': getColor('neutral', 100),
	// Input validation border color for error severity
	'inputValidation.errorBorder': getColor('red', 500),
	// Input validation background color for information severity
	'inputValidation.infoBackground': getColor('blue', 800),
	// Input validation foreground color for information severity
	'inputValidation.infoForeground': getColor('neutral', 100),
	// Input validation border color for information severity
	'inputValidation.infoBorder': getColor('blue', 500),
	// Input validation background color for information warning
	'inputValidation.warningBackground': getColor('yellow', 800),
	// Input validation foreground color for warning severity
	'inputValidation.warningForeground': getColor('neutral', 100),
	// Input validation border color for warning severity
	'inputValidation.warningBorder': getColor('yellow', 500),
};
