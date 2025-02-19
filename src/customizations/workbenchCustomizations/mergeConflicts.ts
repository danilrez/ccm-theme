import { DEFAULT, getColor, TRANSPARENT } from '../../colors';

// Merge conflict decorations are shown when the editor contains special diff ranges
export const mergeConflicts = {
	// Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations
	'merge.currentHeaderBackground': getColor('cyan', 500, 40),
	// Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations
	'merge.currentContentBackground': getColor('cyan', 500, 20),
	// Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations
	'merge.incomingHeaderBackground': getColor('blue', 500, 40),
	// Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations
	'merge.incomingContentBackground': getColor('blue', 500, 20),
	// Border color on headers and the splitter in inline merge conflicts
	'merge.border': TRANSPARENT,
	// Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations
	'merge.commonContentBackground': DEFAULT,
	// Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations
	'merge.commonHeaderBackground': DEFAULT,
	// The background color for changes
	'mergeEditor.change.background': getColor('red', 300, 20),
	// The background color for word changes
	'mergeEditor.change.word.background': getColor('red', 800, 60),
	// The border color of unhandled unfocused conflicts
	'mergeEditor.conflict.unhandledUnfocused.border': getColor('red', 400, 40),
	// The border color of unhandled focused conflicts
	'mergeEditor.conflict.unhandledFocused.border': getColor('red', 400),
	// The border color of handled unfocused conflicts
	'mergeEditor.conflict.handledUnfocused.border': getColor('neutral', 400, 40),
	// The border color of handled focused conflicts
	'mergeEditor.conflict.handledFocused.border': getColor('neutral', 400),
	// The foreground color for changes in input 1
	'mergeEditor.conflict.handled.minimapOverViewRuler': getColor('neutral', 400),
	// The foreground color for changes in input 1
	'mergeEditor.conflict.unhandled.minimapOverViewRuler': getColor('red', 400),
	// The background of the "Conflicting Lines" text
	'mergeEditor.conflictingLines.background': DEFAULT,
	// The background color for changes in base
	'mergeEditor.changeBase.background': DEFAULT,
	// The background color for word changes in base
	'mergeEditor.changeBase.word.background': DEFAULT,
	// The background color of decorations in input 1
	'mergeEditor.conflict.input1.background': DEFAULT,
	// The background color of decorations in input 2
	'mergeEditor.conflict.input2.background': DEFAULT,
};
