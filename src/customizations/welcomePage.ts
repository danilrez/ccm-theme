import { getColor } from '../colors';

export const welcomePage = {
	// Background color for the Welcome page
	'welcomePage.background': undefined,
	// Foreground color for the Welcome page progress bars
	'welcomePage.progress.background': getColor('neutral', 500),
	// Background color for the Welcome page progress bars
	'welcomePage.progress.foreground': getColor('violet', 400),
	// Background color for the tiles on the Welcome page
	'welcomePage.tileBackground': getColor('neutral', 600),
	// Hover background color for the tiles on the Welcome page
	'welcomePage.tileHoverBackground': getColor('neutral', 500),
	// Border color for the tiles on the Welcome page
	'welcomePage.tileBorder': undefined,
	// Background color for the embedded editors on the Interactive Playground
	'walkThrough.embeddedEditorBackground': undefined,
	// Foreground color of the heading of each walkthrough step
	'walkthrough.stepTitle.foreground': undefined,
};
