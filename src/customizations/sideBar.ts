import { getColor } from '../colors';
import { transparent } from '../colors/constants';

// The Side Bar contains views like the Explorer and Search
export const sideBar = {
	// Side Bar background color
	'sideBar.background': getColor('neutral', 800),
	// Side Bar foreground color. The Side Bar is the container for views like Explorer and Search
	'sideBar.foreground': getColor('neutral', 300),
	// Side Bar border color on the side separating the editor
	'sideBar.border': getColor('neutral', 900),
	// Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through
	'sideBar.dropBackground': getColor('neutral', 500, 40),
	// Side Bar title foreground color
	'sideBarTitle.foreground': getColor('neutral', 300),
	// Side Bar section header background color
	'sideBarSectionHeader.background': getColor('neutral', 800),
	// Side Bar section header foreground color
	'sideBarSectionHeader.foreground': getColor('neutral', 300),
	// Side bar section header border color
	'sideBarSectionHeader.border': transparent,
	// Border color between the activity bar at the top/bottom and the views
	'sideBarActivityBarTop.border': transparent,
	// Side bar title background color. The side bar is the container for views like explorer and search
	'sideBarTitle.background': transparent,
	// Background color of sticky scroll in the side bar
	'sideBarStickyScroll.background': getColor('neutral', 800, 80),
	// Border color of sticky scroll in the side bar
	'sideBarStickyScroll.border': undefined,
	// Shadow color of sticky scroll in the side bar
	'sideBarStickyScroll.shadow': getColor('neutral', 900, 60),
};
