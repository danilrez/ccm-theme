import { getColor } from '../colors';

export const titleBar = {
	// 'titleBar.activeBackground': '#0D1017',
	// 'titleBar.activeForeground': '#959AA3', // 300
	// 'titleBar.inactiveBackground': '#232934',
	// 'titleBar.inactiveForeground': '#545B69',

	// Title Bar background when the window is active
	'titleBar.activeBackground': getColor('neutral', 900),
	// Title Bar foreground when the window is active
	'titleBar.activeForeground': getColor('neutral', 300),
	// Title Bar background when the window is inactive
	'titleBar.inactiveBackground': getColor('neutral', 800),
	// Title Bar foreground when the window is inactive
	'titleBar.inactiveForeground': getColor('neutral', 600),
	// Title bar border color
	'titleBar.border': getColor('neutral', 900),
};
