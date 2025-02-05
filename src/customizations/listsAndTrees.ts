import { getColor } from '../colors';
import { defaultColor, transparent } from '../colors/constants';

// Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not
export const listsAndTrees = {
	// List/Tree background color for the selected item when the list/tree is active
	'list.activeSelectionBackground': getColor('violet', 500, 40),
	// List/Tree foreground color for the selected item when the list/tree is active
	'list.activeSelectionForeground': getColor('neutral', 100),
	// List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
	'list.activeSelectionIconForeground': getColor('neutral', 100),
	// List/Tree drag and drop background when moving items around using the mouse
	'list.dropBackground': getColor('neutral', 500, 40),
	// List/Tree background color for the focused item when the list/tree is active
	'list.focusBackground': defaultColor,
	// List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
	'list.focusForeground': defaultColor,
	// List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree
	'list.focusHighlightForeground': defaultColor,
	// List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
	'list.focusOutline': defaultColor,
	// List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not
	'list.focusAndSelectionOutline': getColor('violet', 500),
	// List/Tree foreground color of the match highlights when searching inside the list/tree
	'list.highlightForeground': undefined,
	// List/Tree background when hovering over items using the mouse
	'list.hoverBackground': getColor('neutral', 600, 60),
	// List/Tree foreground when hovering over items using the mouse
	'list.hoverForeground': getColor('neutral', 100),
	// List/Tree background color for the selected item when the list/tree is inactive
	'list.inactiveSelectionBackground': getColor('neutral', 600, 60),
	// List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
	'list.inactiveSelectionForeground': defaultColor,
	// List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
	'list.inactiveSelectionIconForeground': defaultColor,
	// List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists
	'list.inactiveFocusBackground': getColor('neutral', 600, 60),
	// List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
	'list.inactiveFocusOutline': transparent,
	// List/Tree foreground color for invalid items, for example an unresolved root in explorer
	'list.invalidItemForeground': undefined,
	// Foreground color of list items containing errors
	'list.errorForeground': getColor('red', 500),
	// Foreground color of list items containing warnings
	'list.warningForeground': getColor('yellow', 500),
	// List/Tree Filter background color of typed text when searching inside the list/tree
	'listFilterWidget.background': undefined,
	// List/Tree Filter Widget's outline color of typed text when searching inside the list/tree
	'listFilterWidget.outline': undefined,
	// List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree
	'listFilterWidget.noMatchesOutline': undefined,
	// Shadow color of the type filter widget in lists and tree
	'listFilterWidget.shadow': undefined,
	// Background color of the filtered matches in lists and trees
	'list.filterMatchBackground': undefined,
	// Border color of the filtered matches in lists and trees
	'list.filterMatchBorder': undefined,
	// List/Tree foreground color for items that are deemphasized
	'list.deemphasizedForeground': undefined,
	// List/Tree drag and drop border color when moving items between items when using the mouse
	'list.dropBetweenBackground': undefined,
	// Tree Widget's stroke color for indent guides
	'tree.indentGuidesStroke': getColor('neutral', 400),
	// Tree stroke color for the indentation guides that are not active
	'tree.inactiveIndentGuidesStroke': getColor('neutral', 600),
	// Tree stroke color for the indentation guides
	'tree.tableColumnsBorder': undefined,
	// Background color for odd table rows
	'tree.tableOddRowsBackground': undefined,
};
