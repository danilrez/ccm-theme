import { editorBase } from './base';
import { bracketHighlight } from './bracketHighlight';
import { findMatch } from './findMatch';
import { searchEditor } from './search';
import { selectionHighlight } from './selection';
import { temporaryUnknowns } from './unknowns';
import { wordHighlight } from './wordHighlight';

export const editor = {
	editorBase,
	findMatch,
	searchEditor,
	selectionHighlight,
	wordHighlight,
	bracketHighlight,
	temporaryUnknowns,
};
