# szero-grunt

[![Coverage Status](https://coveralls.io/repos/github/bucharest-gold/szero-grunt/badge.svg)](https://coveralls.io/github/bucharest-gold/szero-grunt)
[![Build Status](https://travis-ci.org/bucharest-gold/szero-grunt.svg?branch=master)](https://travis-ci.org/bucharest-gold/szero-grunt)
[![Known Vulnerabilities](https://snyk.io/test/npm/szero/badge.svg)](https://snyk.io/test/npm/szero)
[![dependencies Status](https://david-dm.org/bucharest-gold/szero-grunt/status.svg)](https://david-dm.org/bucharest-gold/szero-grunt)

[![NPM](https://nodei.co/npm/szero-grunt.png)](https://npmjs.org/package/szero-grunt)

Sub Zero dependency search.

|                 | Project Info  |
| --------------- | ------------- |
| License:        | Apache-2.0 |
| Build:          | npm |
| Issue tracker:  | https://github.com/bucharest-gold/szero-grunt/issues |
| Engines:        | Node.js 4.x, 5.x, 6.x, 7.x |

## Installation

    $ npm install --save-dev szero-grunt

## Usage

### Load the plugin
This is done by adding the following line in `Gruntfile.js`

     grunt.loadNpmTasks('szero');

### Configure the plugin
This is done by adding a property to `grunt.initConfig` in `Gruntfile.js`

    szero: {
      directory: '.',
      ci: false,
      file: false,
      filename: 'szero.txt',
      dev: false,
      summary: false
    } 

The above values are the default values and you are only required to list the ones you want to override. If you
are happy with the defaults you don't need a configuration at all.

### Usage
With the configuration above running is simply a matter of:

    $ grunt szero

The configuration options can be overriden on the grunt command line, for example:

    $ grunt szero --file --filename=somefile.txt

To see the available options:

    $ grunt szero --options

## Contributing

Please read the [contributing guide](./CONTRIBUTING.md)
