import { flattenOptimizedTestTheme } from '../colors';
import { customizations } from '../customizations';

// Testing colors
console.log(JSON.stringify(flattenOptimizedTestTheme(customizations), null, 2));
