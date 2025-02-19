import { TRANSPARENT, getHEXColor } from '../../colors';

// A set of colors to control the interactions with actions across the workbench
export const toolBar = {
	// Toolbar background when hovering over actions using the mouse
	'toolbar.hoverBackground': getHEXColor('neutral', 500, 40),
	// Toolbar outline when hovering over actions using the mouse
	'toolbar.hoverOutline': TRANSPARENT,
	// Toolbar background when holding the mouse over action
	'toolbar.activeBackground': getHEXColor('neutral', 500, 60),
};
