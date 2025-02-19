import { getColor } from '../../colors';

// Once opened in the Notification Center, they are displayed in a list with a header
export const notifications = {
	// Notification Center border color
	'notificationCenter.border': getColor('neutral', 900),
	// Notification Center header foreground color
	'notificationCenterHeader.foreground': getColor('neutral', 300),
	// Notification Center header background color
	'notificationCenterHeader.background': getColor('neutral', 800),
	// Notification toast border color
	'notificationToast.border': getColor('neutral', 900),
	// Notification foreground color
	'notifications.foreground': getColor('neutral', 200),
	// Notification background color
	'notifications.background': getColor('neutral', 800),
	// Notification border color separating from other notifications in the Notification Center
	'notifications.border': getColor('neutral', 900),
	// Notification links foreground color
	'notificationLink.foreground': getColor('blue', 400),
	// The color used for the notification error icon
	'notificationsErrorIcon.foreground': getColor('red', 500),
	// The color used for the notification warning icon
	'notificationsWarningIcon.foreground': getColor('yellow', 500),
	// The color used for the notification info icon
	'notificationsInfoIcon.foreground': getColor('blue', 500),
};
