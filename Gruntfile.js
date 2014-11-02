module.exports = function(grunt) {

  // Load Grunt configs
  var path = require('path');
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt_modules'),
    config: 'package.json',
    scope: ['devDependencies', 'dependencies']
  });

};
