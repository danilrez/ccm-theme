import { opacityLevel } from '../colors/constants';
import { OpacityLevel } from '../colors/types';

export const isValidOpacity = (opacity: number): opacity is OpacityLevel => opacity in opacityLevel;
