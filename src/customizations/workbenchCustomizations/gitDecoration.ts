import { getColor } from '../../colors';
import { DEFAULT } from '../../colors';

export const gitDecoration = {
	// Color for added Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.addedResourceForeground': getColor('green', 600),
	// Color for modified Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.modifiedResourceForeground': getColor('violet', 400),
	// Color for deleted Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.deletedResourceForeground': getColor('red', 400),
	// Color for renamed or copied Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.renamedResourceForeground': getColor('green', 400),
	// Color for staged modifications git decorations. Used for file labels and the SCM viewlet
	'gitDecoration.stageModifiedResourceForeground': getColor('violet', 500),
	// Color for staged deletions git decorations. Used for file labels and the SCM viewlet
	'gitDecoration.stageDeletedResourceForeground': getColor('red', 500),
	// Color for untracked Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.untrackedResourceForeground': getColor('green', 500),
	// Color for ignored Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.ignoredResourceForeground': getColor('neutral', 500),
	// Color for conflicting Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.conflictingResourceForeground': getColor('yellow', 300),
	// Color for submodule resources
	'gitDecoration.submoduleResourceForeground': DEFAULT,

	// Gutter Decoration
	// Color for modified line of code
	'editorGutter.modifiedBackground': getColor('violet', 400),
	// Color for new added line of code
	'editorGutter.addedBackground': getColor('green', 400),
	// Color for deleted line of code
	'editorGutter.deletedBackground': getColor('red', 400),
};
