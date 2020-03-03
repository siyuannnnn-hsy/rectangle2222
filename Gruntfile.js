/* global module: true */

module.exports = function (grunt) {
    grunt.initConfig({
        htmlhint: {
            options: {
                htmlhintrc: '.htmlhintrc'
            },
            src: ['*.html']
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: ['*.css']
        },
        eslint:{
            options:{
                eslintrc:'.eslintrc.json',
            },
            target:['*.js']
        }
    });
  
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['htmlhint']);
    grunt.registerTask('default', ['csslint']);
    grunt.registerTask('default', ['eslint']);
    
};