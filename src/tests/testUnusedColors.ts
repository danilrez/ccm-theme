import { flattenOptimizedTestTheme } from '../colors';
import { customizations } from '../customizations';

// 👉 Get UNSET colors for manual UI testing
console.log(JSON.stringify(flattenOptimizedTestTheme(customizations), null, 2));
