import { DEFAULT, getHEXColor } from '../../colors';

export const welcomePage = {
	// Background color for the Welcome page
	'welcomePage.background': DEFAULT,
	// Foreground color for the Welcome page progress bars
	'welcomePage.progress.background': getHEXColor('neutral', 500),
	// Background color for the Welcome page progress bars
	'welcomePage.progress.foreground': getHEXColor('violet', 400),
	// Background color for the tiles on the Welcome page
	'welcomePage.tileBackground': getHEXColor('neutral', 600),
	// Hover background color for the tiles on the Welcome page
	'welcomePage.tileHoverBackground': getHEXColor('neutral', 500),
	// Border color for the tiles on the Welcome page
	'welcomePage.tileBorder': DEFAULT,
	// Background color for the embedded editors on the Interactive Playground
	'walkThrough.embeddedEditorBackground': DEFAULT,
	// Foreground color of the heading of each walkthrough step
	'walkthrough.stepTitle.foreground': DEFAULT,
};
