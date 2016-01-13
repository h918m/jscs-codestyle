module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jscs: {
      src: "src/*.js",
      options: {
        config: ".jscsrc",
        esnext: false, // If you use ES6 http://jscs.info/overview.html#esnext
        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        fix: false // Autofix code style violations when possible.
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscs');
};