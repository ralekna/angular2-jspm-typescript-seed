# Angular2 JSPM Seed project


This project provides minimal installation for:
- Angular2@2.0.0-beta.11 (see other branches if your version doesn't work with specified there since v2.0.0-beta.11)
- [JSPM](http://jspm.io/)
- [Typescript](http://www.typescriptlang.org/)
- [SystemJS](https://github.com/systemjs/systemjs)
- [ES6 modules](http://exploringjs.com/es6/ch_modules.html)

Works with IE9+

## Steps for quick use

- clone this project into you computer

- in project directory run `npm install`

- run `jspm install`. If it fails then install JSPM globally by running `npm install -g jspm`

- install [http-server](https://github.com/indexzero/http-server) by running `npm install -g http-server` (if you don't have) and run `http-server .` (if root folder is your public folder). Run `http-server my-public-files/` if your public files are stored in some subdirectory.

- You should see working example in browser if you navigate to 127.0.0.1:8080

## Steps to create this project yourself

- create directory (like my-ng2-project) for project and navigate your console with `cd /my-ng2-project/` to that dir

- run `npm init` - complete npm project wizard (you can go with defaults if you wish)

- run `npm install --save-dev jspm`

- run `jspm init` - enter these values during setup wizard:
    - `Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:` - default
    - `Enter server baseURL (public folder path) [./]:` - default (if your project contains server files also, you should put front-end files into "public" directory or something similar)
    - `Enter jspm packages folder [.\jspm_packages]:` - default
    - `Enter config file path [.\config.js]:` - default
    - `Configuration file *config.js* doesn't exist, create it? [yes]:` - default
    - `Enter client baseURL (public folder URL) [/]:` - default (if you're planning to store your website not in the root of domain/subdomain you should enter that directory path)
    - `Do you wish to use a transpiler? [yes]:` - default
    - `Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:` - `TypeScript`

- In generated config.js add to config this option:
  ```javascript
  packages: {
    "app": { // "app" is root directory for your project typescript files
      "defaultExtension": "ts"
    }
  },
  ```

- run `jspm install angular2 es6-shim reflect-metadata`

- create index.html file in your public directory root and include these scripts in head:
    ```html
    <!-- following shim is needed if you support Internet Explorer up to v11 (1 before Edge) -->
    <script src="jspm_packages/npm/angular2@2.0.0-beta.11/es6/dev/src/testing/shims_for_IE.js"></script>

    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
        System.import('app/bootstrap')
                .then(null, console.error.bind(console));
    </script>
    ```

- create "app" directory in you public folder root

- create `bootstrap.ts` and `main.ts` with these contents

    ```typescript
    // bootstrap.ts
    // all following three imports are needed for angular2
    import 'es6-shim';
    import 'reflect-metadata';
    import 'angular2/bundles/angular2-polyfills';

    import {bootstrap} from 'angular2/platform/browser';
    import MyApp from './main';

    bootstrap(MyApp);
    ```

    ```typescript
    // main.ts
    import {Component} from 'angular2/core';

    // Annotation section
    @Component({
        selector: 'my-app',
        template: '<h1>Hello {{ name }}</h1>'
    })
    // Component controller
    export default class MyApp {
        constructor() {
            this.name = 'Max';
        }
    }
    ```

- install [http-server](https://github.com/indexzero/http-server) by running `npm install -g http-server` (if you don't have) and run `http-server .` (if root folder is your public folder). Run `http-server my-public-files/` if your public files are stored in some subdirectory.

- You should see working example in browser if you navigate to 127.0.0.1:8080

