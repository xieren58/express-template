'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'assets/css/app.css': ['assets/stylus/*.styl']
        }
      }
    },
    cssmin: {
      options: {},
      minify: {
        expand: true,
        cwd: 'assets/css/',
        src: ['*.css'],
        dest: 'public/css/',
        ext: '.min.css'
      }
    },
    uglify: {
      options: {},
      files: {
        src: ['assets/js/*.js'],
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
