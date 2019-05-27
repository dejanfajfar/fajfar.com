'use strict';

const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            dist: {
                files: [
                    {src: 'src/index.html', dest: 'dist/index.html'},
                    {expand: true, src: 'assets/images/**', dest: 'dist/images/', filter: 'isFile', flatten: true}
                ]
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                outputStyle: "compressed"
            },
            dist: {
                files: {
                    'dist/index.css': 'src/styles/main.scss'
                }
            }
        },
        clean: {
            dist: ['dist']
        }
    });
    
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('default', ['clean:dist', 'copy:dist', 'sass']);
};