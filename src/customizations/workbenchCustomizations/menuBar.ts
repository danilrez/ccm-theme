import { getHEXColor, TRANSPARENT } from '../../colors';

export const menuBar = {
	// Foreground color of the selected menu item in the menubar
	'menubar.selectionForeground': getHEXColor('neutral', 100),
	// Background color of the selected menu item in the menubar
	'menubar.selectionBackground': getHEXColor('neutral', 200, 10),
	// Border color of the selected menu item in the menubar
	'menubar.selectionBorder': TRANSPARENT,
	// Foreground color of menu items
	'menu.foreground': getHEXColor('neutral', 300),
	// Background color of menu items
	'menu.background': getHEXColor('neutral', 800),
	// Foreground color of the selected menu item in menus
	'menu.selectionForeground': getHEXColor('neutral', 100),
	// Background color of the selected menu item in menus
	'menu.selectionBackground': getHEXColor('violet', 400, 40),
	// Border color of the selected menu item in menus
	'menu.selectionBorder': getHEXColor('violet', 400),
	// Color of a separator menu item in menus
	'menu.separatorBackground': getHEXColor('neutral', 600),
	// Border color of menus
	'menu.border': getHEXColor('neutral', 900),
};
