import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

export const quickPicker = {
	// Quick picker (Quick Open) color for grouping borders
	'pickerGroup.border': defaultColor,
	// Quick picker (Quick Open) color for grouping labels
	'pickerGroup.foreground': getColor('neutral', 600),
	// Quick input background color. The quick input widget is the container for views like the color theme picker
	'quickInput.background': getColor('neutral', 800),
	// Quick input foreground color. The quick input widget is the container for views like the color theme picker
	'quickInput.foreground': defaultColor,
	// Quick picker background color for the focused item
	'quickInputList.focusBackground': defaultColor,
	// Quick picker foreground color for the focused item
	'quickInputList.focusForeground': defaultColor,
	// Quick picker icon foreground color for the focused item
	'quickInputList.focusIconForeground': defaultColor,
	// Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette
	'quickInputTitle.background': defaultColor,
};
