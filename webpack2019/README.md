# D3 chart using TypeScript and Webpack

based on
* <https://developerhandbook.com/webpack/webpack-typescript-from-scratch/>
* <https://github.com/ashcroft147/d3-typescript-boilerplate>

## Setup

```
yarn init 

yarn add --dev typescript
./node_modules/.bin/tsc --init

yarn add --dev webpack webpack-cli ts-loader source-map-loader

yarn add d3
yarn add --dev @types/d3

yarn add --dev html-webpack-plugin html-loader

yarn add --dev webpack-dev-server cross-env
```
## Startup

```
yarn install
npm start # dev & watch
npm run build # build for production
```

## Advantages

* modern ES6/TypeScript syntax with arrow functions
* static types enforced (TypeScript)
* code completion (e.g., for d3 API)
* D3 dependency is obvious from `package.json`
* building and starting is obvious from `package.json`

## Disadvantages

* PNG image in HTML files produces error (halts build)
* D3 types in function statements can be quite cluttered (e.g., `d3.Selection<SVGSVGElement, any, HTMLElement, any>`)
* bundled JavaScript file is 260K -- larger than d3.min.js which is 80K
* `node_modules` folder weights 106M

## Future

* webpack plugin `file-loader` might solve loading images and CSV files, cp. <https://developerhandbook.com/webpack/how-to-process-images-with-webpack/>
