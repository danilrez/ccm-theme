import { editorBase } from './base';
import { bracketHighlight } from './bracketHighlight';
import { editorOverviewRuler } from './editorOverviewRuler';
import { findMatch, search, searchEditor } from './search';
import { selectionHighlight } from './selection';
import { wordHighlight } from './wordHighlight';

export const editor = {
	editorBase,
	search,
	searchEditor,
	findMatch,
	selectionHighlight,
	wordHighlight,
	bracketHighlight,
	editorOverviewRuler,
};
