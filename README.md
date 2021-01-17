# ts-playground
experimental D3 &amp; TypeScript project setups

## Desiderata

* D1: modern syntax ES6 or TypeScript
* D2: few and stable dependencies (for future proofness)
* D3: easy setup with npm install and npm start
* D4: code completion and warnings in VS Code
* D5: fast & automatic complilation and reloading in Chrome
* D6: small size for production

## Playgrounds

[ES6 JavaScript, no building](es6/)

[TypeScript and Webpack with HtmlLoader](webpack2019/)

[TypeScript and Webpack without HtmlLoader](webpack4-tsonly/)

[Parcel v1](parcelv1/)

[Svelte with TypeScript and Rollup](svelte-rollup/)

## Security Vulnerabilities

Which playground had more security vulnerabilities (D2)?

* 2021-01-01 node-forge: parcelv1 playground (manual fix needed)
* 2021-01-01 ini & node-forge: webpack playgrounds
* 2020-08-01 elliptic: all playgrounds
* 2020-07-19 lodash: all playgrounds
* 2020-06-07 websocket-extensions: webpack playgrounds
* 2020-04-06 minimist: all playgrounds
* 2020-04-05 acorn: all playgrounds

## Acknowledgments

This work was partly funded by the
Austrian Research Promotion Agency (FFG): grant #866855 via [ReMoCap-Lab](https://research.fhstp.ac.at/en/projects/remocap-lab)
and the
FH St. Pölten via ZoteroVis Pilot.
