# grunt-dredd

> Grunt wrapper for Dredd API Blueprint tester

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dredd --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dredd');
```

## The "dredd" task

### Overview
In your project's Gruntfile, add a section named `dredd` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dredd: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.port
Type: `Integer`
Default value: `3000`

An integer value that is used to open the apimock server.

#### options.src
Type: `String`
Default value: `./api/api.apib`

A string value that represents the path to the API Blueprint file.

#### Dredd options

For a list of options available for Dredd, please check out [Dredd Command Line Options](https://github.com/apiaryio/dredd#command-line-options).

### Usage Examples

#### Default Options
In this example, the default options are used to test an API Blueprint definition against a server running with the default options

```js
grunt.initConfig({
  dredd: {
    options: {}
  },
});
```

#### Custom Options
In this example, custom options are used to test an API Blueprint definition against a server running on localhost, port 3000.

```js
grunt.initConfig({
  dredd: {
    options: {
      server: 'http://localhost:3000',
      src: './api/another_api.apib',
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_v0.1.0_ - Initial release
