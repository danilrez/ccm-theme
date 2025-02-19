import { DEFAULT, TRANSPARENT, getHEXColor } from '../../colors';

// The Status Bar is shown in the bottom of the workbench
export const statusBar = {
	// Standard Status Bar background color
	'statusBar.background': getHEXColor('neutral', 900),
	// Status Bar foreground color
	'statusBar.foreground': getHEXColor('neutral', 300),
	// Status Bar border color separating the Status Bar and editor
	'statusBar.border': getHEXColor('neutral', 900),
	// Status Bar background color when a program is being debugged
	'statusBar.debuggingBackground': getHEXColor('orange', 600),
	// Status Bar foreground color when a program is being debugged
	'statusBar.debuggingForeground': getHEXColor('neutral', 100),
	// Status Bar border color separating the Status Bar and editor when a program is being debugged
	'statusBar.debuggingBorder': getHEXColor('neutral', 900),
	// Status Bar foreground color when no folder is opened
	'statusBar.noFolderForeground': getHEXColor('neutral', 400),
	// Status Bar background color when no folder is opened
	'statusBar.noFolderBackground': getHEXColor('neutral', 700),
	// Status Bar border color separating the Status Bar and editor when no folder is opened
	'statusBar.noFolderBorder': getHEXColor('red', 400),
	// Status Bar item background color when clicking
	'statusBarItem.activeBackground': TRANSPARENT,
	// Status bar item foreground color when hovering. The status bar is shown in the bottom of the window
	'statusBarItem.hoverForeground': getHEXColor('neutral', 100),
	// Status Bar item background color when hovering
	'statusBarItem.hoverBackground': getHEXColor('neutral', 50, 20),
	// Status Bar prominent items foreground color
	'statusBarItem.prominentForeground': DEFAULT,
	// Status Bar prominent items background color
	'statusBarItem.prominentBackground': DEFAULT,
	// Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window
	'statusBarItem.prominentHoverForeground': DEFAULT,
	// Status Bar prominent items background color when hovering
	'statusBarItem.prominentHoverBackground': DEFAULT,
	// Background color for the remote indicator on the status bar
	'statusBarItem.remoteBackground': getHEXColor('violet', 400),
	// Foreground color for the remote indicator on the status bar
	'statusBarItem.remoteForeground': getHEXColor('neutral', 50),
	// Background color for the remote indicator on the status bar when hovering
	'statusBarItem.remoteHoverBackground': getHEXColor('neutral', 900, 20),
	// Foreground color for the remote indicator on the status bar when hovering
	'statusBarItem.remoteHoverForeground': getHEXColor('neutral', 50),
	// Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions
	'statusBarItem.errorBackground': getHEXColor('red', 500),
	// Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions
	'statusBarItem.errorForeground': getHEXColor('neutral', 50),
	// Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window
	'statusBarItem.errorHoverBackground': getHEXColor('neutral', 50, 30),
	// Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window
	'statusBarItem.errorHoverForeground': getHEXColor('neutral', 50),
	// Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningBackground': getHEXColor('yellow', 500),
	// Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningForeground': getHEXColor('neutral', 50),
	// Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningHoverBackground': getHEXColor('neutral', 50, 30),
	// Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window
	'statusBarItem.warningHoverForeground': getHEXColor('neutral', 50),
	// Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window
	'statusBarItem.compactHoverBackground': getHEXColor('neutral', 50, 30),
	// Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window
	'statusBarItem.focusBorder': TRANSPARENT,
	// Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window
	'statusBar.focusBorder': TRANSPARENT,
	// Status bar item background color when the workbench is offline
	'statusBarItem.offlineBackground': DEFAULT,
	// Status bar item foreground color when the workbench is offline
	'statusBarItem.offlineForeground': DEFAULT,
	// Status bar item foreground hover color when the workbench is offline
	'statusBarItem.offlineHoverForeground': DEFAULT,
	// Status bar item background hover color when the workbench is offline
	'statusBarItem.offlineHoverBackground': DEFAULT,
	// Prominent items stand out from other Status Bar entries to indicate importance. One example is the Toggle Tab Key Moves Focus command change mode indicator.
};
