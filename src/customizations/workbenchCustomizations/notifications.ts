import { getHEXColor } from '../../colors';

// Once opened in the Notification Center, they are displayed in a list with a header
export const notifications = {
	// Notification Center border color
	'notificationCenter.border': getHEXColor('neutral', 900),
	// Notification Center header foreground color
	'notificationCenterHeader.foreground': getHEXColor('neutral', 300),
	// Notification Center header background color
	'notificationCenterHeader.background': getHEXColor('neutral', 800),
	// Notification toast border color
	'notificationToast.border': getHEXColor('neutral', 900),
	// Notification foreground color
	'notifications.foreground': getHEXColor('neutral', 200),
	// Notification background color
	'notifications.background': getHEXColor('neutral', 800),
	// Notification border color separating from other notifications in the Notification Center
	'notifications.border': getHEXColor('neutral', 900),
	// Notification links foreground color
	'notificationLink.foreground': getHEXColor('blue', 400),
	// The color used for the notification error icon
	'notificationsErrorIcon.foreground': getHEXColor('red', 500),
	// The color used for the notification warning icon
	'notificationsWarningIcon.foreground': getHEXColor('yellow', 500),
	// The color used for the notification info icon
	'notificationsInfoIcon.foreground': getHEXColor('blue', 500),
};
