import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// Extensions colors
export const extension = {
	// Extension view button foreground color (for example Install button)
	'extensionButton.prominentForeground': getColor('neutral', 50),
	// Extension view button background color
	'extensionButton.prominentBackground': getColor('yellow', 500),
	// Extension view button background hover color
	'extensionButton.prominentHoverBackground': getColor('yellow', 500, 80),
	// Button background color for extension actions
	'extensionButton.background': defaultColor,
	// Button foreground color for extension actions
	'extensionButton.foreground': defaultColor,
	// Button background hover color for extension actions
	'extensionButton.hoverBackground': defaultColor,
	// Button separator color for extension actions
	'extensionButton.separator': defaultColor,
	// Background color for the remote badge in the extensions view
	'extensionBadge.remoteBackground': defaultColor,
	// Foreground color for the remote badge in the extensions view
	'extensionBadge.remoteForeground': defaultColor,
	// The icon color for extension ratings
	'extensionIcon.starForeground': getColor('yellow', 500),
	// The icon color for extension verified publisher
	'extensionIcon.verifiedForeground': getColor('blue', 500),
	// The icon color for pre-release extension
	'extensionIcon.preReleaseForeground': getColor('blue', 500),
	// The icon color for extension sponsor
	'extensionIcon.sponsorForeground': getColor('orange', 500),
};
