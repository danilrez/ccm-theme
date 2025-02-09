import { flattenOptimizedTheme } from '../colors';
import { customizations } from '../customizations';

// 👉 Get SET colors for manual UI testing
console.log(JSON.stringify(flattenOptimizedTheme(customizations), null, 2));
