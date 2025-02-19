import { opacityLevelMap } from '../colors/constants';
import { OpacityLevel } from '../colors/types';

export const isValidOpacity = (opacity: number): opacity is OpacityLevel => opacityLevelMap.has(opacity);
