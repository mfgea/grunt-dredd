/*
 * grunt-dredd
 * https://github.com/mfgea/grunt-dredd
 *
 * Copyright (c) 2014 Matias Gea
 * Licensed under the MIT license.
 */

'use strict';

var Dredd = require('dredd');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dredd', 'Grunt wrapper for Dredd API Blueprint tester', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      server: 'http://localhost:3000',
      src: './api/api.apib'
    });

    var dreddConfiguration = {
      'blueprintPath': options.src,
      'server': options.server,
      'options': options
    };

    var dreddInstance = new Dredd(dreddConfiguration);

    dreddInstance.run();

    console.log('Dredd test run at ' + dreddConfiguration.options.server + ', using ' + options.src);

  });

};
