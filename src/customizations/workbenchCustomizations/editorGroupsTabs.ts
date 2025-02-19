// Editor Groups are the containers of editors
// There can be many editor groups. A Tab is the container of an editor
// Multiple Tabs can be opened in one editor group

import { DEFAULT, TRANSPARENT, getColor } from '../../colors';

export const editorGroupsTabs = {
	// Color to separate multiple editor groups from each other
	'editorGroup.border': getColor('neutral', 900),
	// Background color when dragging editors around
	'editorGroup.dropBackground': getColor('neutral', 500, 40),
	// Background color of the editor group title header when using single Tab (set "workbench.editor.showTabs": "single")
	'editorGroupHeader.noTabsBackground': DEFAULT,
	// Background color of the Tabs container
	'editorGroupHeader.tabsBackground': getColor('neutral', 800),
	// Border color below the editor tabs control when tabs are enabled
	'editorGroupHeader.tabsBorder': getColor('neutral', 900),
	// Border color between editor group header and editor (below breadcrumbs if enabled)
	'editorGroupHeader.border': TRANSPARENT,
	// Background color of an empty editor group
	'editorGroup.emptyBackground': getColor('neutral', 700),
	// Border color of an empty editor group that is focused
	'editorGroup.focusedEmptyBorder': DEFAULT,
	// Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor
	'editorGroup.dropIntoPromptForeground': getColor('neutral', 200),
	// Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor
	'editorGroup.dropIntoPromptBackground': getColor('neutral', 700),
	// Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor
	'editorGroup.dropIntoPromptBorder': getColor('neutral', 900),
	// Active Tab background color in an active group
	'tab.activeBackground': getColor('neutral', 700),
	// Active Tab background color in an inactive editor group
	'tab.unfocusedActiveBackground': getColor('neutral', 700),
	// Active Tab foreground color in an active group
	'tab.activeForeground': getColor('neutral', 100),
	// Border to separate Tabs from each other
	'tab.border': getColor('neutral', 900),
	// Bottom border for the active tab
	'tab.activeBorder': getColor('neutral', 700),
	// Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.selectedBorderTop': getColor('green', 400),
	// Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.selectedBackground': DEFAULT,
	// Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.selectedForeground': DEFAULT,
	// Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.dragAndDropBorder': getColor('green', 400),
	// Bottom border for the active tab in an inactive editor group
	'tab.unfocusedActiveBorder': getColor('neutral', 700),
	// Top border for the active tab
	'tab.activeBorderTop': getColor('green', 400),
	// Top border for the active tab in an inactive editor group
	'tab.unfocusedActiveBorderTop': getColor('green', 400, 60),
	// Border on the right of the last pinned editor to separate from unpinned editors
	'tab.lastPinnedBorder': DEFAULT,
	// Inactive Tab background color
	'tab.inactiveBackground': getColor('neutral', 800),
	// Inactive Tab background color in an unfocused group
	'tab.unfocusedInactiveBackground': getColor('neutral', 800),
	// Inactive Tab foreground color in an active group
	'tab.inactiveForeground': getColor('neutral', 500),
	// Active tab foreground color in an inactive editor group
	'tab.unfocusedActiveForeground': getColor('neutral', 300),
	// Inactive tab foreground color in an inactive editor group
	'tab.unfocusedInactiveForeground': getColor('neutral', 500),
	// Tab background color when hovering
	'tab.hoverBackground': getColor('neutral', 700),
	// Tab background color in an unfocused group when hovering
	'tab.unfocusedHoverBackground': getColor('neutral', 700),
	// Tab foreground color when hovering
	'tab.hoverForeground': getColor('neutral', 100),
	// Tab foreground color in an unfocused group when hovering
	'tab.unfocusedHoverForeground': getColor('neutral', 100),
	// Border to highlight tabs when hovering
	'tab.hoverBorder': getColor('neutral', 700),
	// Border to highlight tabs in an unfocused group when hovering
	'tab.unfocusedHoverBorder': getColor('neutral', 700),
	// Border on the top of modified (dirty) active tabs in an active group
	'tab.activeModifiedBorder': getColor('violet', 400),
	// Border on the top of modified (dirty) inactive tabs in an active group
	'tab.inactiveModifiedBorder': getColor('violet', 400, 60),
	// Border on the top of modified (dirty) active tabs in an unfocused group
	'tab.unfocusedActiveModifiedBorder': getColor('violet', 400, 60),
	// Border on the top of modified (dirty) inactive tabs in an unfocused group
	'tab.unfocusedInactiveModifiedBorder': getColor('violet', 400, 60),
	// Background color of the editor pane visible on the left and right side of the centered editor layout
	'editorPane.background': DEFAULT,
	// Color to separate two editors from each other when shown side by side in an editor group from top to bottom
	'sideBySideEditor.horizontalBorder': DEFAULT,
	// Color to separate two editors from each other when shown side by side in an editor group from left to right
	'sideBySideEditor.verticalBorder': DEFAULT,
};
