import { DEFAULT, TRANSPARENT } from '../../../colors';

// This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
export const editorOverviewRuler = {
	/* Base Overview Ruler */

	// Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
	'editorOverviewRuler.background': TRANSPARENT,
	// Color of the overview ruler border.
	'editorOverviewRuler.border': TRANSPARENT,
	// Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.findMatchForeground': DEFAULT,
	// Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.rangeHighlightForeground': DEFAULT,
	// Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.selectionHighlightForeground': DEFAULT,
	// Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.wordHighlightForeground': DEFAULT,
	// Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.wordHighlightStrongForeground': DEFAULT,
	// Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.wordHighlightTextForeground': DEFAULT,
	// Overview ruler marker color for modified content.
	'editorOverviewRuler.modifiedForeground': DEFAULT,
	// Overview ruler marker color for added content.
	'editorOverviewRuler.addedForeground': DEFAULT,
	// Overview ruler marker color for deleted content.
	'editorOverviewRuler.deletedForeground': DEFAULT,
	// Overview ruler marker color for errors.
	'editorOverviewRuler.errorForeground': DEFAULT,
	// Overview ruler marker color for warnings.
	'editorOverviewRuler.warningForeground': DEFAULT,
	// Overview ruler marker color for infos.
	'editorOverviewRuler.infoForeground': DEFAULT,
	// Overview ruler marker color for matching brackets.
	'editorOverviewRuler.bracketMatchForeground': DEFAULT,
	// Overview ruler marker color for inline chat inserted content.
	'editorOverviewRuler.inlineChatInserted': DEFAULT,
	// Overview ruler marker color for inline chat removed content.
	'editorOverviewRuler.inlineChatRemoved': DEFAULT,

	/* When MERGE */

	// Current overview ruler foreground for inline merge conflicts
	'editorOverviewRuler.currentContentForeground': DEFAULT,
	// Incoming overview ruler foreground for inline merge conflicts
	'editorOverviewRuler.incomingContentForeground': DEFAULT,
	// Common ancestor overview ruler foreground for inline merge conflicts
	'editorOverviewRuler.commonContentForeground': DEFAULT,
	// Editor overview ruler decoration color for resolved comments. This color should be opaque
	'editorOverviewRuler.commentForeground': DEFAULT,
	// Editor overview ruler decoration color for unresolved comments. This color should be opaque
	'editorOverviewRuler.commentUnresolvedForeground': DEFAULT,
};
