import { getColor } from '../colors';

// The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar
export const activityBar = {
	// Activity Bar background color
	'activityBar.background': getColor('neutral', 800),
	// Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar
	'activityBar.dropBorder': undefined,
	// Activity Bar foreground color (for example used for the icons)
	'activityBar.foreground': getColor('neutral', 200),
	// Activity Bar item foreground color when it is inactive
	'activityBar.inactiveForeground': getColor('neutral', 500),
	// Activity Bar border color with the Side Bar
	'activityBar.border': undefined, // getColor('neutral', 900),
	// Activity notification badge background color
	'activityBarBadge.background': getColor('violet', 500),
	// Activity notification badge foreground color
	'activityBarBadge.foreground': getColor('neutral', 100),
	// Activity Bar active indicator border color
	'activityBar.activeBorder': getColor('green', 400),
	// Activity Bar optional background color for the active element
	'activityBar.activeBackground': getColor('neutral', 800),
	// Activity bar focus border color for the active item
	'activityBar.activeFocusBorder': undefined,
	// Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.foreground': undefined,
	// Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.activeBorder': undefined,
	// Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.inactiveForeground': undefined,
	// Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.dropBorder': undefined,
	// Background color of the activity bar when set to top / bottom
	'activityBarTop.background': undefined,
	// Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar
	'activityBarTop.activeBackground': undefined,
};
