# D3 chart using TypeScript and Webpack

based on
* <https://v4.webpack.js.org/guides/getting-started/>
  and <https://v4.webpack.js.org/guides/typescript/>
* <https://developerhandbook.com/webpack/webpack-typescript-from-scratch/>
* <https://github.com/ashcroft147/d3-typescript-boilerplate>

## Setup

```
yarn init

yarn add --dev webpack webpack-cli ts-loader typescript webpack-dev-server webpack-merge
./node_modules/.bin/tsc --init

yarn add d3
yarn add --dev @types/d3
```

Adapting configuration files according to tutorials.

Production mode configured with `webpack-merge`.

## Startup

```
yarn install
npm start # dev & watch
```

## Advantages

* modern ES6/TypeScript syntax with arrow functions
* static types enforced (TypeScript)
* code completion (e.g., for d3 API)
* D3 dependency is obvious from `package.json`
* building and starting is obvious from `package.json`
* old-school way to include style and images from `dist` folder

## Disadvantages

* D3 types in function statements can be quite cluttered (e.g., `d3.Selection<SVGSVGElement, any, HTMLElement, any>`)
* `node_modules` folder weights 102M
* hard to separate autogenerated files from assets in `dist` folder
