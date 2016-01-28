# Development Environment
This is a stripped down version of JohnPapa's [gulp-patterns](https://github.com/johnpapa/gulp-patterns). It is intended for developers who want to create an Angular environment from the ground up. It contains a variety of basic tools to allow the developer to hit the ground running.

## Getting Started
* Install nvm from [source repo](https://github.com/creationix/nvm) (run the first code block under 'Install Script')
* `source nvm-setup`
    * If you get a message saying 'N/A: version "v0.10.25" is not yet installed', run `nvm install 0.10.25` before continuing
    * Re-execute `source nvm-setup` after the ancient version of node is installed
* `npm install -g node-inspector bower gulp tsd`
* `npm install`
* `bower install`
* `tsd install -r -o --save`
* `gulp build` or `gulp serve-dev`

## Included Tools
* [Preconfigured Gulpfile](/gulpfile.js)
* [Gulp Configuration File](/gulp.config.js)
* [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) TypeScript definitions
* Bower Definitions [1](/.bowerrc) and [2](/bower.json)
* [JSHint](https://www.jshint.com) ([configuration file](/.jslint))
* [JavaScript Code Style Linter](https://jscs.info/overview) ([configuration file](/.jscsrc))
* [TypeScript Definition Installer](/tsd.json)
