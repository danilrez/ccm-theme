import { DEFAULT, getHEXColor } from '../../colors';

// Debug Icons colors
export const debugIcons = {
	// Icon color for breakpoints
	'debugIcon.breakpointForeground': getHEXColor('red', 500),
	// Icon color for disabled breakpoints
	'debugIcon.breakpointDisabledForeground': DEFAULT,
	// Icon color for unverified breakpoints
	'debugIcon.breakpointUnverifiedForeground': getHEXColor('red', 500),
	// Icon color for the current breakpoint stack frame
	'debugIcon.breakpointCurrentStackframeForeground': DEFAULT,
	// Icon color for all breakpoint stack frames
	'debugIcon.breakpointStackframeForeground': DEFAULT,
	// Debug toolbar icon for start debugging
	'debugIcon.startForeground': getHEXColor('green', 400),
	// Debug toolbar icon for pause
	'debugIcon.pauseForeground': getHEXColor('blue', 400),
	// Debug toolbar icon for stop
	'debugIcon.stopForeground': getHEXColor('orange', 400),
	// Debug toolbar icon for disconnect
	'debugIcon.disconnectForeground': getHEXColor('red', 400),
	// Debug toolbar icon for restart
	'debugIcon.restartForeground': getHEXColor('green', 400),
	// Debug toolbar icon for step over
	'debugIcon.stepOverForeground': getHEXColor('blue', 400),
	// Debug toolbar icon for step into
	'debugIcon.stepIntoForeground': getHEXColor('cyan', 400),
	// Debug toolbar icon for step over
	'debugIcon.stepOutForeground': getHEXColor('cyan', 400),
	// Debug toolbar icon for continue
	'debugIcon.continueForeground': getHEXColor('blue', 400),
	// Debug toolbar icon for step back
	'debugIcon.stepBackForeground': getHEXColor('blue', 400),
	// Foreground color for info messages in debug REPL console
	'debugConsole.infoForeground': getHEXColor('blue', 400),
	// Foreground color for warning messages in debug REPL console
	'debugConsole.warningForeground': getHEXColor('yellow', 400),
	// Foreground color for error messages in debug REPL console
	'debugConsole.errorForeground': getHEXColor('red', 400),
	// Foreground color for source filenames in debug REPL console
	'debugConsole.sourceForeground': DEFAULT,
	// Foreground color for debug console input marker icon
	'debugConsoleInputIcon.foreground': getHEXColor('neutral', 500),
};
