module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            dist: {
                files: [
                    {src: 'src/index.css', dest: 'dist/index.css'},
                    {src: 'src/index.html', dest: 'dist/index.html'},
                    {expand: true, src: 'assets/images/**', dest: 'dist/images/', filter: 'isFile', flatten: true}
                ]
            }
        },
        clean: {
            dist: ['dist']
        }
    });
    
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('default', ['clean:dist', 'copy:dist']);
};