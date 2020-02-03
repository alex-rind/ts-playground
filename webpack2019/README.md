# D3 chart using simple ES6 JavaScript

based on
* <https://developerhandbook.com/webpack/webpack-typescript-from-scratch/>
* <https://github.com/ashcroft147/d3-typescript-boilerplate>

## Setup

```
cd webpack
yarn init 

yarn add --dev typescript
./node_modules/.bin/tsc --init

yarn add --dev webpack webpack-cli ts-loader source-map-loader

yarn add d3
yarn add --dev @types/d3

```

TODO continue

## Startup

```
npm install
npm run build
```

## Advantages

* modern ES6/TypeScript syntax with arrow functions
* static types enforced (not TypeScript!)
* TODO check code completion (e.g., for d3 API)
* D3 dependency is obvious from `package.json`
* TODO starting should be obvious

## Disadvantages

* D3 types in function statements can be quite cluttered (e.g., `d3.Selection<SVGSVGElement, any, HTMLElement, any>`)
* webpack warns that `main.js` exceeds asset size limits
* TODO check weight of `node_modules` folder
