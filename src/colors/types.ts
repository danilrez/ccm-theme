import { colorsDark, colorsLight, opacityLevel } from './constants';

export type HexColor = `#${string}`;
type ColorsDark = keyof typeof colorsDark;
type ColorsLight = keyof typeof colorsLight;
export type Color = ColorsDark | ColorsLight;
export type Shade = keyof (typeof colorsDark)['neutral'];
export type OpacityLevel = keyof typeof opacityLevel;
<<<<<<< HEAD
<<<<<<< HEAD
export type NestedObject = { [key: string]: string | undefined | NestedObject };
=======
>>>>>>> af3043b (refactor)
=======
export type NestedObject = { [key: string]: string | undefined | NestedObject };
>>>>>>> 5edd62f (step2)
