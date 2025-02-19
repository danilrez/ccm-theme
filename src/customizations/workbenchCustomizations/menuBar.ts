import { getColor, TRANSPARENT } from '../../colors';

export const menuBar = {
	// Foreground color of the selected menu item in the menubar
	'menubar.selectionForeground': getColor('neutral', 100),
	// Background color of the selected menu item in the menubar
	'menubar.selectionBackground': getColor('neutral', 200, 10),
	// Border color of the selected menu item in the menubar
	'menubar.selectionBorder': TRANSPARENT,
	// Foreground color of menu items
	'menu.foreground': getColor('neutral', 300),
	// Background color of menu items
	'menu.background': getColor('neutral', 800),
	// Foreground color of the selected menu item in menus
	'menu.selectionForeground': getColor('neutral', 100),
	// Background color of the selected menu item in menus
	'menu.selectionBackground': getColor('violet', 400, 40),
	// Border color of the selected menu item in menus
	'menu.selectionBorder': getColor('violet', 400),
	// Color of a separator menu item in menus
	'menu.separatorBackground': getColor('neutral', 600),
	// Border color of menus
	'menu.border': getColor('neutral', 900),
};
