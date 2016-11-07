'use strict';

const taskName = 'szero';
const szero = require('szero');

module.exports = function (grunt) {
  grunt.registerTask(taskName, 'Sub Zero dependency search', function () {
    if (grunt.option('options')) {
      grunt.log.writeln('szero version: ' + require('szero/package.json').version);
      grunt.log.writeln('Options: ');
      grunt.log.writeln('--file', 'enable file reporter');
      grunt.log.writeln('--filename <filename>', 'change the default filename');
      grunt.log.writeln('--ci', 'enables process.exit() when unused dependency found');
      grunt.log.writeln('--dev', 'enables devDependencies processing.');
      grunt.log.writeln('--summary', 'enables summary report');
      return true;
    }

    const taskConfig = grunt.config.get('szero') || {};
    var options = grunt.config.merge({
      'szero': {
        ci: grunt.option('ci') || taskConfig.ci || false,
        directory: grunt.option('directory') || taskConfig.directory || '.',
        dev: grunt.option('dev') || taskConfig.dev || false,
        fileReporter: grunt.option('file') || taskConfig.file || false,
        filename: grunt.option('filename') || taskConfig.filename || 'szero.txt',
        summary: grunt.option('summary') || taskConfig.summary || false,
        help: grunt.option('usage')
      }
    }).szero;
    options.consoleReporter = !options.fileReporter;
    logOptions(options, grunt);
    szero.report(options.directory, options);
  });
};

function logOptions (options, grunt) {
  grunt.log.debug('ci: ' + options.ci);
  grunt.log.debug('directory: ' + options.directory);
  grunt.log.debug('dev: ' + options.dev);
  grunt.log.debug('consoleReporter: ' + options.consoleReporter);
  grunt.log.debug('fileReporter: ' + options.fileReporter);
  grunt.log.debug('filename: ' + options.filename);
  grunt.log.debug('summary: ' + options.summary);
}
