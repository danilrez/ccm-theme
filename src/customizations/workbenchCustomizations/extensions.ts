import { DEFAULT, getHEXColor } from '../../colors';

// Extensions colors
export const extension = {
	// Extension view button foreground color (for example Install button)
	'extensionButton.prominentForeground': getHEXColor('neutral', 50),
	// Extension view button background color
	'extensionButton.prominentBackground': getHEXColor('yellow', 500),
	// Extension view button background hover color
	'extensionButton.prominentHoverBackground': getHEXColor('yellow', 500, 80),
	// Button background color for extension actions
	'extensionButton.background': DEFAULT,
	// Button foreground color for extension actions
	'extensionButton.foreground': DEFAULT,
	// Button background hover color for extension actions
	'extensionButton.hoverBackground': DEFAULT,
	// Button separator color for extension actions
	'extensionButton.separator': DEFAULT,
	// Background color for the remote badge in the extensions view
	'extensionBadge.remoteBackground': DEFAULT,
	// Foreground color for the remote badge in the extensions view
	'extensionBadge.remoteForeground': DEFAULT,
	// The icon color for extension ratings
	'extensionIcon.starForeground': getHEXColor('yellow', 500),
	// The icon color for extension verified publisher
	'extensionIcon.verifiedForeground': getHEXColor('blue', 500),
	// The icon color for pre-release extension
	'extensionIcon.preReleaseForeground': getHEXColor('blue', 500),
	// The icon color for extension sponsor
	'extensionIcon.sponsorForeground': getHEXColor('orange', 500),
};
