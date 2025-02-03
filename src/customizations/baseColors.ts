import { getColor } from '../colors';

export const baseColors = {
	// Overall border color for focused elements. This color is only used if not overridden by a component
	focusBorder: getColor('violet', 500),
	// Overall foreground color. This color is only used if not overridden by a component
	foreground: getColor('neutral', 200),
	// Overall foreground for disabled elements. This color is only used if not overridden by a component
	disabledForeground: getColor('neutral', 500),
	// Border color of widgets such as Find/Replace inside the editor
	'widget.border': undefined,
	// Shadow color of widgets such as Find/Replace inside the editor
	'widget.shadow': getColor('neutral', 800),
	// Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal)
	'selection.background': getColor('neutral', 500, 60),
	// Foreground color for description text providing additional information, for example for a label
	descriptionForeground: getColor('neutral', 200),
	// Overall foreground color for error messages (this color is only used if not overridden by a component)
	errorForeground: getColor('red', 500),
	// The default color for icons in the workbench
	'icon.foreground': getColor('neutral', 200),
	// The hover border color for draggable sashes
	'sash.hoverBorder': undefined,
};
