export const AngularCli = `
{
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": ["assets", "favicon.ico"],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "prefix": "app",
      "styles": [],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ]
}
`;

export const Env = `
export const environment = {
  production: false
};
`;

export const EnvProd = `export const environment = {
  production: true
};`;

export const Index = `
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Angular</title>
	<base href="/">

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
	<og-app></og-app>
</body>

</html>
`;

export const Main = `
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
`;

export const PackageJson = `
{
  "name": "Gemini sandbox",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --disable-host-check",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "11.2.0",
    "@angular/cdk": "11.2.0",
    "@angular/common": "11.2.0",
    "@angular/compiler": "11.2.0",
    "@angular/core": "11.2.0",
    "@angular/forms": "11.2.0",
    "@angular/http": "7.2.16",
    "@angular/platform-browser": "11.2.0",
    "@angular/platform-browser-dynamic": "11.2.0",
    "@angular/router": "11.2.0",
    "@opensesame/gemini": "latest",
    "core-js": "3.8.3",
    "deepmerge": "4.2.2",
    "rxjs": "6.6.3",
    "zone.js": "0.11.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "0.1102.0",
    "@angular/cli": "11.2.0",
    "@angular/compiler-cli": "11.2.0",
    "@angular/language-service": "11.2.0",
    "@types/jasmine": "3.6.3",
    "@types/jasminewd2": "2.0.8",
    "@types/node": "14.14.28",
    "codelyzer": "6.0.1",
    "jasmine-core": "3.6.0",
    "jasmine-spec-reporter": "6.0.0",
    "karma": "6.1.1",
    "karma-chrome-launcher": "3.1.0",
    "karma-coverage-istanbul-reporter": "3.0.3",
    "karma-jasmine": "4.0.1",
    "karma-jasmine-html-reporter": "1.5.4",
    "protractor": "7.0.0",
    "ts-node": "9.1.1",
    "tslint": "6.1.3",
    "typescript": "4.1.5"
  },
  "keywords": [],
  "description": ""
}
`;

export const Polyfills = `
import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';
`;

export const Tsconfig = `
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "module": "es2020",
    "lib": ["es2018", "dom"]
  }
}
`;

export const Typings = `
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
`;

export const Template = {
  files: {
    '.angular-cli.json': {
      content: AngularCli
    },
    'package.json': {
      content: PackageJson
    },
    'src/environments/environment.ts': {
      content: Env
    },
    'src/environments/environment.prod.ts': {
      content: EnvProd
    },
    'src/index.html': {
      content: Index
    },
    'src/main.ts': {
      content: Main
    },
    'src/polyfills.ts': {
      content: Polyfills
    },
    'src/typings.d.ts': {
      content: Typings
    },
    'tsconfig.json': {
      content: Tsconfig
    }
  },
  template: 'angular-cli'
};
