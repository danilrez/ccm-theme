import { defaultColor } from '../colors/constants';

// NOTE: The window border colors are only supported on macOS and Linux (not Windows) and only when the custom title bar is enabled ("window.titleBarStyle": "custom")
export const window = {
	// Border color for the active (focused) window
	'window.activeBorder': defaultColor,
	// Border color for the inactive (unfocused) windows
	'window.inactiveBorder': defaultColor,
};
