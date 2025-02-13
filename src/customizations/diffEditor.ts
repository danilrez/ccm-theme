import { getColor } from '../colors';
import { transparent } from '../colors/constants';

// For coloring inserted and removed text, use either a background or a border color but not both
export const diffEditor = {
	// Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.insertedTextBackground': getColor('green', 500, 20),
	// Outline color for the text that got inserted
	'diffEditor.insertedTextBorder': transparent,
	// Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.removedTextBackground': getColor('red', 500, 20),
	// Outline color for text that got removed
	'diffEditor.removedTextBorder': transparent,
	// Border color between the two text editors
	'diffEditor.border': transparent,
	// Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views
	'diffEditor.diagonalFill': getColor('neutral', 500),
	// Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.insertedLineBackground': getColor('green', 500, 20),
	// Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.removedLineBackground': getColor('red', 500, 20),
	// Background color for the margin where lines got inserted
	'diffEditorGutter.insertedLineBackground': transparent,
	// Background color for the margin where lines got removed
	'diffEditorGutter.removedLineBackground': transparent,
	// Diff overview ruler foreground for inserted content
	'diffEditorOverview.insertedForeground': undefined,
	// Diff overview ruler foreground for removed content
	'diffEditorOverview.removedForeground': undefined,
	// The color of unchanged blocks in diff editor
	'diffEditor.unchangedRegionBackground': undefined,
	// The foreground color of unchanged blocks in the diff editor
	'diffEditor.unchangedRegionForeground': undefined,
	// The color of the shadow around unchanged region widgets
	'diffEditor.unchangedRegionShadow': undefined,
	// The background color of unchanged code in the diff editor
	'diffEditor.unchangedCodeBackground': undefined,
	// The border color for text that got moved in the diff editor
	'diffEditor.move.border': undefined,
	// The active border color for text that got moved in the diff editor
	'diffEditor.moveActive.border': undefined,
	// The background color of the diff editor's header
	'multiDiffEditor.headerBackground': undefined,
	// The background color of the multi file diff editor
	'multiDiffEditor.background': undefined,
	// The border color of the multi file diff editor
	'multiDiffEditor.border': undefined,
};
