import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

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
	'inputOption.activeBackground': getColor('violet', 500, 40),
	// Border color of activated options in input fields
	'inputOption.activeBorder': getColor('violet', 500),
	// Foreground color of activated options in input fields
	'inputOption.activeForeground': defaultColor,
	// Background color of activated options in input fields
	'inputOption.hoverBackground': defaultColor,
	// Input validation background color for error severity
	'inputValidation.errorBackground': undefined,
	// Input validation foreground color for error severity
	'inputValidation.errorForeground': undefined,
	// Input validation border color for error severity
	'inputValidation.errorBorder': undefined,
	// Input validation background color for information severity
	'inputValidation.infoBackground': undefined,
	// Input validation foreground color for information severity
	'inputValidation.infoForeground': undefined,
	// Input validation border color for information severity
	'inputValidation.infoBorder': undefined,
	// Input validation background color for information warning
	'inputValidation.warningBackground': undefined,
	// Input validation foreground color for warning severity
	'inputValidation.warningForeground': undefined,
	// Input validation border color for warning severity
	'inputValidation.warningBorder': undefined,
};
