var os = require('os'),
    path = require('path');
fs = require('fs');

module.exports = function (grunt) {
    'use strict';
    /*
     * Used to capture task execution times.
     */
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    /*
     * Configure the grunt tasks.
     */
    grunt.initConfig();
    grunt.config.merge({
        karma: {
            pacts: {
                options: {
                    configFile: 'test/karma.config.js'
                }
            }
        }
    });

    /*
     * Register the tasks.
     */
    grunt.registerTask('test-pact', ['karma:pacts']);
};