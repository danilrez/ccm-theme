import { defaultColor, transparent } from '../../colors/constants';

// This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
export const editorOverviewRuler = {
	/* Base Overview Ruler */

	// Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
	'editorOverviewRuler.background': transparent,
	// Color of the overview ruler border.
	'editorOverviewRuler.border': transparent,
	// Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.findMatchForeground': defaultColor,
	// Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.rangeHighlightForeground': defaultColor,
	// Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.selectionHighlightForeground': defaultColor,
	// Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.wordHighlightForeground': defaultColor,
	// Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.wordHighlightStrongForeground': defaultColor,
	// Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
	'editorOverviewRuler.wordHighlightTextForeground': defaultColor,
	// Overview ruler marker color for modified content.
	'editorOverviewRuler.modifiedForeground': defaultColor,
	// Overview ruler marker color for added content.
	'editorOverviewRuler.addedForeground': defaultColor,
	// Overview ruler marker color for deleted content.
	'editorOverviewRuler.deletedForeground': defaultColor,
	// Overview ruler marker color for errors.
	'editorOverviewRuler.errorForeground': defaultColor,
	// Overview ruler marker color for warnings.
	'editorOverviewRuler.warningForeground': defaultColor,
	// Overview ruler marker color for infos.
	'editorOverviewRuler.infoForeground': defaultColor,
	// Overview ruler marker color for matching brackets.
	'editorOverviewRuler.bracketMatchForeground': defaultColor,
	// Overview ruler marker color for inline chat inserted content.
	'editorOverviewRuler.inlineChatInserted': defaultColor,
	// Overview ruler marker color for inline chat removed content.
	'editorOverviewRuler.inlineChatRemoved': defaultColor,

	/* When MERGE */

	// Current overview ruler foreground for inline merge conflicts
	'editorOverviewRuler.currentContentForeground': defaultColor,
	// Incoming overview ruler foreground for inline merge conflicts
	'editorOverviewRuler.incomingContentForeground': defaultColor,
	// Common ancestor overview ruler foreground for inline merge conflicts
	'editorOverviewRuler.commonContentForeground': defaultColor,
	// Editor overview ruler decoration color for resolved comments. This color should be opaque
	'editorOverviewRuler.commentForeground': defaultColor,
	// Editor overview ruler decoration color for unresolved comments. This color should be opaque
	'editorOverviewRuler.commentUnresolvedForeground': defaultColor,
};
