'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          "assets/css/app.css": ['assets/css/*.styl']
        }
      }
    },
    cssmin: {
      options: {
        // banner: '<%= banner %>',
      },
      minify: {
        expand: true,
        cwd: 'assets/css/',
        src: [ '*.css' ],
        dest: 'public/css/',
        ext: '.min.css'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      files: {
        src: [ 'assets/js/*.js' ],
        dest: 'public/js/',
        expand: true,
        flatten: true,
        ext: '.min.js'
      }
    },
    watch: {
      css: {
        files: ['assets/css/*.styl'],
        tasks: ['stylus', 'cssmin']
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['']);


};