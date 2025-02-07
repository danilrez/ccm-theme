import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// The Status Bar is shown in the bottom of the workbench
export const statusBar = {
	// Standard Status Bar background color
	'statusBar.background': getColor('neutral', 900),
	// Status Bar foreground color
	'statusBar.foreground': getColor('neutral', 300),
	// Status Bar border color separating the Status Bar and editor
	'statusBar.border': getColor('neutral', 900),
	// Status Bar background color when a program is being debugged
	'statusBar.debuggingBackground': getColor('orange', 600),
	// Status Bar foreground color when a program is being debugged
	'statusBar.debuggingForeground': getColor('neutral', 50),
	// Status Bar border color separating the Status Bar and editor when a program is being debugged
	'statusBar.debuggingBorder': getColor('neutral', 900),
	// Status Bar foreground color when no folder is opened
	'statusBar.noFolderForeground': getColor('neutral', 300),
	// Status Bar background color when no folder is opened
	'statusBar.noFolderBackground': getColor('neutral', 700),
	// Status Bar border color separating the Status Bar and editor when no folder is opened
	'statusBar.noFolderBorder': getColor('red', 400),
	// Status Bar item background color when clicking
	'statusBarItem.activeBackground': undefined,
	// Status bar item foreground color when hovering. The status bar is shown in the bottom of the window
	'statusBarItem.hoverForeground': getColor('neutral', 50),
	// Status Bar item background color when hovering
	'statusBarItem.hoverBackground': getColor('neutral', 100, 30),
	// Status Bar prominent items foreground color
	'statusBarItem.prominentForeground': undefined,
	// Status Bar prominent items background color
	'statusBarItem.prominentBackground': undefined,
	// Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window
	'statusBarItem.prominentHoverForeground': undefined,
	// Status Bar prominent items background color when hovering
	'statusBarItem.prominentHoverBackground': undefined,
	// Background color for the remote indicator on the status bar
	'statusBarItem.remoteBackground': getColor('violet', 400),
	// Foreground color for the remote indicator on the status bar
	'statusBarItem.remoteForeground': getColor('neutral', 100),
	// Background color for the remote indicator on the status bar when hovering
	'statusBarItem.remoteHoverBackground': getColor('violet', 500),
	// Foreground color for the remote indicator on the status bar when hovering
	'statusBarItem.remoteHoverForeground': getColor('neutral', 100),
	// Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions
	'statusBarItem.errorBackground': getColor('red', 500),
	// Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions
	'statusBarItem.errorForeground': getColor('neutral', 50),
	// Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window
	'statusBarItem.errorHoverBackground': getColor('neutral', 100, 30),
	// Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window
	'statusBarItem.errorHoverForeground': getColor('neutral', 50),
	// Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningBackground': getColor('yellow', 500),
	// Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningForeground': getColor('neutral', 50),
	// Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningHoverBackground': getColor('neutral', 100, 30),
	// Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningHoverForeground': getColor('neutral', 50),
	// Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window
	'statusBarItem.compactHoverBackground': getColor('neutral', 100, 30),
	// Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window
	'statusBarItem.focusBorder': undefined,
	// Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window
	'statusBar.focusBorder': defaultColor,
	// Status bar item background color when the workbench is offline
	'statusBarItem.offlineBackground': undefined,
	// Status bar item foreground color when the workbench is offline
	'statusBarItem.offlineForeground': undefined,
	// Status bar item foreground hover color when the workbench is offline
	'statusBarItem.offlineHoverForeground': undefined,
	// Status bar item background hover color when the workbench is offline
	'statusBarItem.offlineHoverBackground': undefined,
	// Prominent items stand out from other Status Bar entries to indicate importance. One example is the Toggle Tab Key Moves Focus command change mode indicator.
};
