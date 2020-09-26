# NeuedaTestUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Running on Docker

In order to run the app on Docker, navigate in a terminal run the following commands in terminal (make sure you are in the applications directory)
`docker build -t alanquigley/angular-app .`
`docker run -d -it -p 80:80/tcp --name angular-app alanquigley/angular-app:latest`

Once it is running in the container, you can navigate to your docker machine IP or localhost:80 to hit the app
To kill the docker container instance, run the following command, replacing <container-id> with the id docker generated when the run command was ran.
`docker container kill <container-id>`

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
