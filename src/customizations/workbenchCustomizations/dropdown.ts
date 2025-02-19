// A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel

import { getHEXColor } from '../../colors';

// NOTE: the Dropdown control is not used on macOS currentl
export const dropdown = {
	// Dropdown background
	'dropdown.background': getHEXColor('neutral', 600),
	// Dropdown list background
	'dropdown.listBackground': getHEXColor('neutral', 700),
	// Dropdown border
	'dropdown.border': getHEXColor('neutral', 900),
	// Dropdown foreground
	'dropdown.foreground': getHEXColor('neutral', 200),
};
