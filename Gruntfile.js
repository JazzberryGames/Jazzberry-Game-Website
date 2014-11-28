module.exports = function(grunt) {

  // Load Grunt configs
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt_modules'),
  });
  grunt.log.writeln(process.env.AWS_ACCESS_KEY_ID);
  grunt.log.writeln(process.env.AWS_SECRET_ACCESS_KEY);
};
