import { getColor } from '../colors';
import { defaultColor } from '../colors/constants';

// The Minimap shows a minified version of the current file
export const minimap = {
	// Highlight color for matches from search within files
	'minimap.findMatchHighlight': getColor('violet', 400, 40),
	// Highlight color for the editor selection
	'minimap.selectionHighlight': getColor('neutral', 400, 40),
	// Highlight color for errors within the editor
	'minimap.errorHighlight': defaultColor,
	// Highlight color for warnings within the editor
	'minimap.warningHighlight': defaultColor,
	// Minimap background color
	'minimap.background': getColor('neutral', 900, 30),
	// Minimap marker color for repeating editor selections
	'minimap.selectionOccurrenceHighlight': defaultColor,
	// Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity
	'minimap.foregroundOpacity': getColor('neutral', 900, 80),
	// Minimap marker color for infos
	'minimap.infoHighlight': defaultColor,
	// Minimap slider background color
	'minimapSlider.background': defaultColor,
	// Minimap slider background color when hovering
	'minimapSlider.hoverBackground': defaultColor,
	// Minimap slider background color when clicked on
	'minimapSlider.activeBackground': defaultColor,
	// Minimap gutter color for added content
	'minimapGutter.addedBackground': defaultColor,
	// Minimap gutter color for modified content
	'minimapGutter.modifiedBackground': defaultColor,
	// Minimap gutter color for deleted content
	'minimapGutter.deletedBackground': defaultColor,
};
