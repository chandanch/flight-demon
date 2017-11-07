# Flight Demon

 Demostrates module loading use SystemJS module loader

## Features

- **Automatic transpilation**: All the typscript files are transpiled using npm scripts *Refer to 'scripts' property in `package.json`*. The transpiled scripts are added to `dist` folder
- **Module Loader**: SystemJS
- **Serving**:Uses lite server in development. Detects changes and auto refreshes browser

## Installation

- Clone the repo
- move to the cloned directory
- Install dependencies: `npm install`
- Start the app: `npm start`
- View the app: <http://localhost:3000>

## Notes

- Refer to `system.config.js` for detailed information on systemjs configuration for the project

- In the config we can also include all the third party modules in the `map` property.