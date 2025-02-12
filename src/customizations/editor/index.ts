import { editorBase } from './base';
import { bracketHighlight } from './bracketHighlight';
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
};
