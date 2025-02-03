import { getColor } from '../colors';

// The theme colors for breadcrumbs navigation
export const breadcrumbs = {
	// Color of breadcrumb items
	'breadcrumb.foreground': getColor('neutral', 300),
	// Background color of breadcrumb items
	'breadcrumb.background': getColor('neutral', 700),
	// Color of focused breadcrumb items
	'breadcrumb.focusForeground': getColor('neutral', 100),
	// Color of selected breadcrumb items
	'breadcrumb.activeSelectionForeground': getColor('neutral', 100),
	// Background color of breadcrumb item picker
	'breadcrumbPicker.background': getColor('neutral', 700),
};
