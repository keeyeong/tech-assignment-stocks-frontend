# Tech Assignment Stocks Frontend

This project is meant to be a front end of its counter part project, "Tech Assignment Stocks".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development VS Production environment

By default, when `ng serve` is executed the environment configuration is non-prod. Configuration for prod and non-prod environments are in `src/environments`.

To start the server in production mode, use `ng serve --env=prod`. 

The `prod` environment is meant to be run with the the `prod` (default) profile of the backend; the default environment is meant to be run with the `dev` profile of the backend.

### Rest end points 

The default configured non-prod environment is configured to communicate with REST end points of the backend at `http://localhost:8484`. Change this to suit your environment. The variable is aptly named `restUrlBase`.


