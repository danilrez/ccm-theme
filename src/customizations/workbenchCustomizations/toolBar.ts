import { TRANSPARENT, getColor } from '../../colors';

// A set of colors to control the interactions with actions across the workbench
export const toolBar = {
	// Toolbar background when hovering over actions using the mouse
	'toolbar.hoverBackground': getColor('neutral', 500, 40),
	// Toolbar outline when hovering over actions using the mouse
	'toolbar.hoverOutline': TRANSPARENT,
	// Toolbar background when holding the mouse over action
	'toolbar.activeBackground': getColor('neutral', 500, 60),
};
