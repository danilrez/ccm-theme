import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar
export const activityBar = {
	// Activity Bar background color
	'activityBar.background': getColor('neutral', 800),
	// Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar
	'activityBar.dropBorder': getColor('green', 400),
	// Activity Bar foreground color (for example used for the icons)
	'activityBar.foreground': getColor('neutral', 100),
	// Activity Bar item foreground color when it is inactive
	'activityBar.inactiveForeground': getColor('neutral', 500),
	// Activity Bar border color with the Side Bar
	'activityBar.border': getColor('neutral', 900),
	// Activity notification badge background color
	'activityBarBadge.background': getColor('violet', 400),
	// Activity notification badge foreground color
	'activityBarBadge.foreground': getColor('neutral', 50),
	// Activity Bar active indicator border color
	'activityBar.activeBorder': getColor('green', 400),
	// Activity Bar optional background color for the active element
	'activityBar.activeBackground': getColor('neutral', 900),
	// Activity bar focus border color for the active item
	'activityBar.activeFocusBorder': defaultColor,
	// Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.foreground': getColor('neutral', 100),
	// Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.activeBorder': getColor('green', 400),
	// Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.inactiveForeground': getColor('neutral', 500),
	// Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.dropBorder': getColor('green', 400),
	// Background color of the activity bar when set to top / bottom
	'activityBarTop.background': defaultColor,
	// Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar
	'activityBarTop.activeBackground': defaultColor,
};
