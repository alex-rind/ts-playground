# D3 chart using TypeScript and Parcel v1

based on 
* <https://parceljs.org/getting_started.html>
* <http://typescript-react-primer.loyc.net/tutorial-3.html>
* <https://css-tricks.com/why-parcel-has-become-my-go-to-bundler-for-development/>

## Setup

```
yarn init 
yarn add --dev parcel

yarn tsc --init
yarn add --dev @types/d3
yarn build
```

## Startup

```
yarn install
yarn build
yarn dev
```

## Advantages

* modern ES6/TypeScript syntax with arrow functions
* static types enforced (TypeScript)
* code completion (e.g., for d3 API)
* D3 dependency is obvious from `package.json`
* building and starting is obvious from `package.json`
* images in HTML code work without any extra plugin

## Disadvantages

* D3 types in function statements can be quite cluttered (e.g., `d3.Selection<SVGSVGElement, any, HTMLElement, any>`)
* bundled JavaScript file is 468K -- larger than d3.min.js which is 80K
* `node_modules` folder weights 140M

## Other

* <https://www.npmjs.com/package/parcel-plugin-static-files-copy> for CSV files?
* parcel v2 is currently an alpha version and it failed to include D3: `node_modules\d3\index.js does not export 'default'`
