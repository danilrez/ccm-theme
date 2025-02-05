// The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover
// The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception

import { getColor } from "../colors";

export const editorWidget = {
	// Foreground color of editor widgets, such as find/replace
	'editorWidget.foreground': undefined,
	// Background color of editor widgets, such as Find/Replace
	'editorWidget.background': undefined,
	// Border color of the editor widget unless the widget does not contain a border or defines its own border color
	'editorWidget.border': undefined,
	// Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget
	'editorWidget.resizeBorder': undefined,
	// Background color of the suggestion widget
	'editorSuggestWidget.background': undefined,
	// Border color of the suggestion widget
	'editorSuggestWidget.border': undefined,
	// Foreground color of the suggestion widget
	'editorSuggestWidget.foreground': undefined,
	// Color of the match highlights in the suggest widget when an item is focused
	'editorSuggestWidget.focusHighlightForeground': undefined,
	// Color of the match highlights in the suggestion widget
	'editorSuggestWidget.highlightForeground': undefined,
	// Background color of the selected entry in the suggestion widget
	'editorSuggestWidget.selectedBackground': undefined,
	// Foreground color of the selected entry in the suggest widget
	'editorSuggestWidget.selectedForeground': undefined,
	// Icon foreground color of the selected entry in the suggest widget
	'editorSuggestWidget.selectedIconForeground': undefined,
	// Foreground color of the suggest widget status
	'editorSuggestWidgetStatus.foreground': undefined,
	// Foreground color of the editor hover
	'editorHoverWidget.foreground': undefined,
	// Background color of the editor hover
	'editorHoverWidget.background': undefined,
	// Border color of the editor hover
	'editorHoverWidget.border': undefined,
	// Foreground color of the active item in the parameter hint
	'editorHoverWidget.highlightForeground': undefined,
	// Background color of the editor hover status bar
	'editorHoverWidget.statusBarBackground': undefined,
	// Border color of the ghost text shown by inline completion providers and the suggest preview
	'editorGhostText.border': undefined,
	// Background color of the ghost text in the editor
	'editorGhostText.background': undefined,
	// Foreground color of the ghost text shown by inline completion providers and the suggest preview
	'editorGhostText.foreground': undefined,
	// Editor sticky scroll background color
	'editorStickyScroll.background': getColor('neutral',700),
	// Border color of sticky scroll in the editor
	'editorStickyScroll.border': undefined,
	// Shadow color of sticky scroll in the editor
	'editorStickyScroll.shadow': getColor('neutral',900,60),
	// Editor sticky scroll on hover background color
	'editorStickyScrollHover.background': getColor('neutral',600),
	// Exception widget background color
	'debugExceptionWidget.background': undefined,
	// Exception widget border color
	'debugExceptionWidget.border': undefined,
	// Editor marker navigation widget background
	'editorMarkerNavigation.background': undefined,
	// Editor marker navigation widget error color
	'editorMarkerNavigationError.background': undefined,
	// Editor marker navigation widget warning color
	'editorMarkerNavigationWarning.background': undefined,
	// Editor marker navigation widget info color
	'editorMarkerNavigationInfo.background': undefined,
	// Editor marker navigation widget error heading background
	'editorMarkerNavigationError.headerBackground': undefined,
	// Editor marker navigation widget warning heading background
	'editorMarkerNavigationWarning.headerBackground': undefined,
	// Editor marker navigation widget info heading background
	'editorMarkerNavigationInfo.headerBackground': undefined,
};
