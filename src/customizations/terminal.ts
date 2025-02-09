import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// TODO: fix some colors
export const terminal = {
	// The background of the Integrated Terminal's viewport
	'terminal.background': getColor('neutral', 700),
	// The color of the border that separates split panes within the terminal. This defaults to panel.border
	'terminal.border': defaultColor,
	// The default foreground color of the Integrated Terminal
	'terminal.foreground': getColor('neutral', 200),

	// 'Black' ANSI color in the terminal
	'terminal.ansiBlack': getColor('neutral', 600),
	// 'Blue' ANSI color in the terminal
	'terminal.ansiBlue': getColor('blue', 400),
	// 'Cyan' ANSI color in the terminal
	'terminal.ansiCyan': getColor('cyan', 400),
	// 'Green' ANSI color in the terminal
	'terminal.ansiGreen': getColor('green', 400),
	// 'Magenta' ANSI color in the terminal
	'terminal.ansiMagenta': getColor('magenta', 400),
	// 'Red' ANSI color in the terminal
	'terminal.ansiRed': getColor('red', 400),
	// 'White' ANSI color in the terminal
	'terminal.ansiWhite': getColor('neutral', 300),
	// 'Yellow' ANSI color in the terminal
	'terminal.ansiYellow': getColor('yellow', 400),

	// 'BrightBlack' ANSI color in the terminal
	'terminal.ansiBrightBlack': getColor('neutral', 500),
	// 'BrightBlue' ANSI color in the terminal
	'terminal.ansiBrightBlue': getColor('blue', 300),
	// 'BrightCyan' ANSI color in the terminal
	'terminal.ansiBrightCyan': getColor('cyan', 300),
	// 'BrightGreen' ANSI color in the terminal
	'terminal.ansiBrightGreen': getColor('green', 300),
	// 'BrightMagenta' ANSI color in the terminal
	'terminal.ansiBrightMagenta': getColor('magenta', 300),
	// 'BrightRed' ANSI color in the terminal
	'terminal.ansiBrightRed': getColor('red', 300),
	// 'BrightWhite' ANSI color in the terminal
	'terminal.ansiBrightWhite': getColor('neutral', 200),
	// 'BrightYellow' ANSI color in the terminal
	'terminal.ansiBrightYellow': getColor('yellow', 300),

	// The selection background color of the terminal
	'terminal.selectionBackground': getColor('neutral', 600),
	// The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied
	'terminal.selectionForeground': defaultColor,
	// The selection background color of the terminal when it does not have focus
	'terminal.inactiveSelectionBackground': getColor('neutral', 600, 40),

	// Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content
	'terminal.findMatchBackground': defaultColor,
	// Border color of the current search match in the terminal
	'terminal.findMatchBorder': defaultColor,
	// Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content
	'terminal.findMatchHighlightBackground': defaultColor,
	// Border color of the other search matches in the terminal
	'terminal.findMatchHighlightBorder': defaultColor,
	// Color of the highlight when hovering a link in the terminal
	'terminal.hoverHighlightBackground': defaultColor,

	// The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor
	'terminalCursor.background': defaultColor,
	// The foreground color of the terminal cursor
	'terminalCursor.foreground': getColor('yellow', 400),

	// The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through
	'terminal.dropBackground': getColor('neutral', 500, 40),
	// Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder
	'terminal.tab.activeBorder': getColor('green', 400),

	// The default terminal command decoration background color
	'terminalCommandDecoration.defaultBackground': defaultColor,
	// The terminal command decoration background color for successful commands
	'terminalCommandDecoration.successBackground': defaultColor,
	// The terminal command decoration background color for error commands
	'terminalCommandDecoration.errorBackground': defaultColor,
	// The overview ruler cursor color
	'terminalOverviewRuler.cursorForeground': defaultColor,
	// Overview ruler marker color for find matches in the terminal
	'terminalOverviewRuler.findMatchForeground': defaultColor,
	// The background color of the sticky scroll overlay in the terminal
	'terminalStickyScroll.background': defaultColor,
	// The border of the sticky scroll overlay in the terminal
	'terminalStickyScroll.border': defaultColor,
	// The background color of the sticky scroll overlay in the terminal when hovered
	'terminalStickyScrollHover.background': defaultColor,
	// Foreground color of the terminal initial hint
	'terminal.initialHintForeground': defaultColor,
};
