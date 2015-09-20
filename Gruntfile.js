module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
      // https://github.com/nDmitry/grunt-postcss
      postcss: {
        options: {
          // map: true, // inline sourcemaps

          // or
          // map: {
              // inline: false, // save all sourcemaps as separate files...
              // annotation: 'dist/css/maps/' // ...to the specified directory
              // annotation: './scss/' // ...to the specified directory
          // },

          processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
            // require('cssnano')() // minify the result
          ],
          
          syntax: require('postcss-scss') // work with SCSS directly
          
        },
        dist: {
          // src: 'css/*.css'
          src: 'css/*.scss'
        }
      }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-postcss');
  
    grunt.registerTask('default', ['postcss']);
};

