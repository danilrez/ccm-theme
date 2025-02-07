import { flattenOptimizedTheme } from '../colors';
import { customizations } from '../customizations';

// Ready colors
console.log(JSON.stringify(flattenOptimizedTheme(customizations), null, 2));
