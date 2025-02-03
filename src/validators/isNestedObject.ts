import { NestedObject } from '../colors/types';

export const isNestedObject = (value: string | undefined | NestedObject): value is NestedObject => value != null && typeof value === 'object';
