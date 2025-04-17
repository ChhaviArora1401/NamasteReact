# Namaste React


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C ++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- Https
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food App
/**
 * Header
 * - Logo
 * - Nav Items
 * Body Component
 * - Search
 * - Restaurant Container 
 *   - Restauranr Card
 *    - Img
 *    - Name of Res, star  rating, cuisine, delivery time
 * Footer
 * - CopyRight
 * - Links
 * - Address
 * - Contact
 */

 Two types of Export/Import

 - Default Export/Import

export default Component;
import Component from "path";

 - Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
(Normal JS utility functions)
- useState() - Superpowerful State Variables in React
    - whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

- useEffect() - 
    - if no dependancy array => useEffect is called on every render
    - if dependency array is empty = [] => useEffect is called on initial render(just once)
    - if dependecy array is [state] => called everytime 'state' is updated


# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing


# Dynamic Routing


# Class Component LifeCycle
/* what happens:
 - Parent Constructor
   - Parent Render

   - Durga Child Constructor
   - Durga Child Render

   - Sonu Child Constructor
   - Sonu Child Render

<DOM UPDATED - IN SINGLE BATCH> 
   - Durga Child Component Did Mount
   - Sonu Child Component Did Mount

- Parent Component Did Mount */