import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// Note: These colors are for the GUI settings editor which can be opened with the Preferences: Open Settings (UI) command
export const settings = {
	// The foreground color for a section header or active title
	'settings.headerForeground': defaultColor,
	// The line that indicates a modified setting
	'settings.modifiedItemIndicator': getColor('violet', 400),
	// Dropdown background
	'settings.dropdownBackground': getColor('neutral', 800),
	// Dropdown foreground
	'settings.dropdownForeground': defaultColor,
	// Dropdown border
	'settings.dropdownBorder': getColor('neutral', 900),
	// Dropdown list border
	'settings.dropdownListBorder': getColor('neutral', 900),
	// Checkbox background
	'settings.checkboxBackground': defaultColor,
	// Checkbox foreground
	'settings.checkboxForeground': defaultColor,
	// Checkbox border
	'settings.checkboxBorder': defaultColor,
	// The background color of a settings row when hovered
	'settings.rowHoverBackground': getColor('neutral', 600),
	// Text input box background
	'settings.textInputBackground': getColor('neutral', 800),
	// Text input box foreground
	'settings.textInputForeground': defaultColor,
	// Text input box border
	'settings.textInputBorder': defaultColor,
	// Number input box background
	'settings.numberInputBackground': getColor('neutral', 800),
	// Number input box foreground
	'settings.numberInputForeground': defaultColor,
	// Number input box border
	'settings.numberInputBorder': defaultColor,
	// Background color of a focused setting row
	'settings.focusedRowBackground': getColor('neutral', 600),
	// The color of the row's top and bottom border when the row is focused
	'settings.focusedRowBorder': getColor('violet', 400),
	// The color of the header container border
	'settings.headerBorder': defaultColor,
	// The color of the Settings editor splitview sash border
	'settings.sashBorder': defaultColor,
	// The foreground color for a section header or hovered title
	'settings.settingsHeaderHoverForeground': getColor('neutral', 50),
};
