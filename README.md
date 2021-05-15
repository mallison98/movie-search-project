# MovieSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## To Do:
- Deal with unit tests (.spec.ts files)
- Deal with e2e tests (e2e folder)
- another page for lots of details?
- reorganize models so they aren't all in one folder
- commenting
- use angular material?
- trim and get rid of special characters in search input -> regex
- make nav bar into a routing module?

Stuff to add to the readme:

## What is this?
This app allows you to search movies using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). There are basically two versions of the app, accessible from the landing page: one that uses Angular Material for its components and one that doesn't. I wanted to try out Angular Material but I also wanted to work with no premade components.

## How do I run it?
1. Install Node.js
2. `npm install -g @angular/cli` to install the Angular CLI if you don't already have it.
3. `npm i` on the repo to install dependencies.
4. `ng serve -o` to host the app; it'll open a new tab in your browser to `http://localhost:4200/`.