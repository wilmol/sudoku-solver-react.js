# react-template

[![build](https://github.com/wilmol/react-template/workflows/build/badge.svg?event=push)](https://github.com/wilmol/react-template/actions?query=workflow%3Abuild)
[![codecov](https://codecov.io/gh/wilmol/react-template/branch/master/graph/badge.svg)](https://codecov.io/gh/wilmol/react-template)

template repository for React projects

## Usage
* Go to: https://github.com/wilmol/react-template/generate
  * This will prompt you to create a new repository with all the files setup
* Rename the project (currently `react-template`) to your liking
* Configure GitHub Pages to point at the `gh-pages` branch
* Create your README
* Delete anything you won't use

#### Install dependencies and start
```
npm i
npm start
```

#### Format code
```
npm run eslint -- --fix
```

#### Deploy
```
npm run deploy
```
The site will be available at: `https://{username}.github.io/{repo-name}/`
