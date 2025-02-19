import { DEFAULT, getColor } from '../../colors';

// Debug Icons colors
export const debugIcons = {
	// Icon color for breakpoints
	'debugIcon.breakpointForeground': getColor('red', 500),
	// Icon color for disabled breakpoints
	'debugIcon.breakpointDisabledForeground': DEFAULT,
	// Icon color for unverified breakpoints
	'debugIcon.breakpointUnverifiedForeground': getColor('red', 500),
	// Icon color for the current breakpoint stack frame
	'debugIcon.breakpointCurrentStackframeForeground': DEFAULT,
	// Icon color for all breakpoint stack frames
	'debugIcon.breakpointStackframeForeground': DEFAULT,
	// Debug toolbar icon for start debugging
	'debugIcon.startForeground': getColor('green', 400),
	// Debug toolbar icon for pause
	'debugIcon.pauseForeground': getColor('blue', 400),
	// Debug toolbar icon for stop
	'debugIcon.stopForeground': getColor('orange', 400),
	// Debug toolbar icon for disconnect
	'debugIcon.disconnectForeground': getColor('red', 400),
	// Debug toolbar icon for restart
	'debugIcon.restartForeground': getColor('green', 400),
	// Debug toolbar icon for step over
	'debugIcon.stepOverForeground': getColor('blue', 400),
	// Debug toolbar icon for step into
	'debugIcon.stepIntoForeground': getColor('cyan', 400),
	// Debug toolbar icon for step over
	'debugIcon.stepOutForeground': getColor('cyan', 400),
	// Debug toolbar icon for continue
	'debugIcon.continueForeground': getColor('blue', 400),
	// Debug toolbar icon for step back
	'debugIcon.stepBackForeground': getColor('blue', 400),
	// Foreground color for info messages in debug REPL console
	'debugConsole.infoForeground': getColor('blue', 400),
	// Foreground color for warning messages in debug REPL console
	'debugConsole.warningForeground': getColor('yellow', 400),
	// Foreground color for error messages in debug REPL console
	'debugConsole.errorForeground': getColor('red', 400),
	// Foreground color for source filenames in debug REPL console
	'debugConsole.sourceForeground': DEFAULT,
	// Foreground color for debug console input marker icon
	'debugConsoleInputIcon.foreground': getColor('neutral', 500),
};
