# learning-experience-platform

## Project setup
```
npm install
```

### Dev configuration
You need to have the correct config `/public/config/all.json` to be able to launch the application. The config is in the `gitignore` so it should not be checked in but an example config lives in `/public/config/example.json`. Check with your team to find out what the correct variables are for running against the some of the test servers

Serve the JSON Mocks for easy disconnected development. Install `http-server` by running `npm i -g http-server` and run `http-server -p 8086 mocks --cors` from the root of the project

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint -- --fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
