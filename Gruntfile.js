/*global module:false*/
module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    watch: {
      scsslint: {
        files: 'scss/**/*.scss',
        tasks: ['scsslint']
      },
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: {
            'style.css' : 'scss/style.scss'
        }
      },
      queries: {
        files: {
            'queries.css' : 'scss/queries.scss'
        }
      }
    },
    scsslint: {
      allFiles: [
        'scss/**/*.scss'
      ]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-scss-lint');

  // Default task.
  grunt.registerTask('default', ['sass', 'scsslint', 'watch']);
};