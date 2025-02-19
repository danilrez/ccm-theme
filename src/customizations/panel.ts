// Panels are shown below the editor area and contain views like Output and Integrated Terminal

import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

export const panel = {
	// Panel background color
	'panel.background': getColor('neutral', 700),
	// Panel border color to separate the panel from the editor
	'panel.border': getColor('neutral', 900),
	// Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal
	'panel.dropBorder': defaultColor,
	// Border color for the active panel title
	'panelTitle.activeBorder': getColor('violet', 400),
	// Title color for the active panel
	'panelTitle.activeForeground': getColor('green', 400),
	// Title color for the inactive panel
	'panelTitle.inactiveForeground': getColor('neutral', 500),
	// Input box border for inputs in the panel
	'panelInput.border': getColor('neutral', 900),
	// Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSection.border': defaultColor,
	// Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSection.dropBackground': getColor('neutral', 500, 40),
	// Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSectionHeader.background': getColor('neutral', 600),
	// Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSectionHeader.foreground': defaultColor,
	// Background color of sticky scroll in the panel
	'panelStickyScroll.background': defaultColor,
	// Border color of sticky scroll in the panel
	'panelStickyScroll.border': defaultColor,
	// Shadow color of sticky scroll in the panel
	'panelStickyScroll.shadow': defaultColor,
	// Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSectionHeader.border': defaultColor,
	// Output view background color
	'outputView.background': defaultColor,
	// Output view sticky scroll background color
	'outputViewStickyScroll.background': defaultColor,
};
