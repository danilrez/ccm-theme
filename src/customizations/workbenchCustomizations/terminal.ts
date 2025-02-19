import { DEFAULT, getHEXColor } from '../../colors';

// TODO: fix some colors
export const terminal = {
	// The background of the Integrated Terminal's viewport
	'terminal.background': getHEXColor('neutral', 700),
	// The color of the border that separates split panes within the terminal. This defaults to panel.border
	'terminal.border': DEFAULT,
	// The default foreground color of the Integrated Terminal
	'terminal.foreground': getHEXColor('neutral', 200),

	// 'Black' ANSI color in the terminal
	'terminal.ansiBlack': getHEXColor('neutral', 600),
	// 'Blue' ANSI color in the terminal
	'terminal.ansiBlue': getHEXColor('blue', 400),
	// 'Cyan' ANSI color in the terminal
	'terminal.ansiCyan': getHEXColor('cyan', 400),
	// 'Green' ANSI color in the terminal
	'terminal.ansiGreen': getHEXColor('green', 400),
	// 'Magenta' ANSI color in the terminal
	'terminal.ansiMagenta': getHEXColor('magenta', 400),
	// 'Red' ANSI color in the terminal
	'terminal.ansiRed': getHEXColor('red', 400),
	// 'White' ANSI color in the terminal
	'terminal.ansiWhite': getHEXColor('neutral', 300),
	// 'Yellow' ANSI color in the terminal
	'terminal.ansiYellow': getHEXColor('yellow', 400),

	// 'BrightBlack' ANSI color in the terminal
	'terminal.ansiBrightBlack': getHEXColor('neutral', 500),
	// 'BrightBlue' ANSI color in the terminal
	'terminal.ansiBrightBlue': getHEXColor('blue', 300),
	// 'BrightCyan' ANSI color in the terminal
	'terminal.ansiBrightCyan': getHEXColor('cyan', 300),
	// 'BrightGreen' ANSI color in the terminal
	'terminal.ansiBrightGreen': getHEXColor('green', 300),
	// 'BrightMagenta' ANSI color in the terminal
	'terminal.ansiBrightMagenta': getHEXColor('magenta', 300),
	// 'BrightRed' ANSI color in the terminal
	'terminal.ansiBrightRed': getHEXColor('red', 300),
	// 'BrightWhite' ANSI color in the terminal
	'terminal.ansiBrightWhite': getHEXColor('neutral', 200),
	// 'BrightYellow' ANSI color in the terminal
	'terminal.ansiBrightYellow': getHEXColor('yellow', 300),

	// The selection background color of the terminal
	'terminal.selectionBackground': getHEXColor('neutral', 200, 10),
	// The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied
	'terminal.selectionForeground': DEFAULT,
	// The selection background color of the terminal when it does not have focus
	'terminal.inactiveSelectionBackground': getHEXColor('neutral', 400, 10),

	// Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content
	'terminal.findMatchBackground': DEFAULT,
	// Border color of the current search match in the terminal
	'terminal.findMatchBorder': DEFAULT,
	// Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content
	'terminal.findMatchHighlightBackground': DEFAULT,
	// Border color of the other search matches in the terminal
	'terminal.findMatchHighlightBorder': DEFAULT,
	// Color of the highlight when hovering a link in the terminal
	'terminal.hoverHighlightBackground': getHEXColor('neutral', 600, 90),

	// The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor
	'terminalCursor.background': DEFAULT,
	// The foreground color of the terminal cursor
	'terminalCursor.foreground': getHEXColor('yellow', 400),

	// The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through
	'terminal.dropBackground': getHEXColor('neutral', 200, 10),
	// Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder
	'terminal.tab.activeBorder': getHEXColor('green', 400),

	// The default terminal command decoration background color
	'terminalCommandDecoration.defaultBackground': DEFAULT,
	// The terminal command decoration background color for successful commands
	'terminalCommandDecoration.successBackground': DEFAULT,
	// The terminal command decoration background color for error commands
	'terminalCommandDecoration.errorBackground': DEFAULT,
	// The overview ruler cursor color
	'terminalOverviewRuler.cursorForeground': DEFAULT,
	// Overview ruler marker color for find matches in the terminal
	'terminalOverviewRuler.findMatchForeground': DEFAULT,
	// The background color of the sticky scroll overlay in the terminal
	'terminalStickyScroll.background': DEFAULT,
	// The border of the sticky scroll overlay in the terminal
	'terminalStickyScroll.border': DEFAULT,
	// The background color of the sticky scroll overlay in the terminal when hovered
	'terminalStickyScrollHover.background': DEFAULT,
	// Foreground color of the terminal initial hint
	'terminal.initialHintForeground': DEFAULT,
};
