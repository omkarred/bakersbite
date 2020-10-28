# BakersBite

# How to deploy proj to github page using angular-cli-ghpages (Git Hub Pages)


# Refer : https://www.geeksforgeeks.org/deployment-of-angular-application-using-github-pages/


1.  npm install -g angular-cli-ghpages

2.  ng build --prod --base-href "https://<username>.github.io/<repo>"    For ex. 

    ng build --prod --base-href "https://omkarred.github.io/bakersbite/"  

3.  ngh --dir dist/<proj_name> // This created ngh-pages branch under bakersbite repo & deploy all the code base in it.

    ngh --dir dist/bakersbite tip: refer proj_name to  "defaultProject" field in angular.json file 


4. Now refer https://github.com/omkarred/bakersbite/settings & "GitHub Pages" section & select the branch as gh-pages and folder as root

5. Then open link : https://omkarred.github.io/bakersbite/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
