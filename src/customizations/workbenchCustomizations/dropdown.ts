// A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel

import { getColor } from '../../colors';

// NOTE: the Dropdown control is not used on macOS currentl
export const dropdown = {
	// Dropdown background
	'dropdown.background': getColor('neutral', 600),
	// Dropdown list background
	'dropdown.listBackground': getColor('neutral', 700),
	// Dropdown border
	'dropdown.border': getColor('neutral', 900),
	// Dropdown foreground
	'dropdown.foreground': getColor('neutral', 200),
};
