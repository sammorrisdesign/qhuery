/*global module:false*/
module.exports = function(grunt) {

  var sass = require('node-sass');
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);


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
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      options: {
        implementation: sass
      },
      dist: {
        files: {
            'style.css' : 'scss/style.scss'
        }
      },
      queries: {
        files: {
            'dist/queries.css' : 'scss/queries.scss'
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

  // Default task.
  grunt.registerTask('default', ['sass', 'watch']);
};
