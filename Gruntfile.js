/**
 * Created by Adam on 5/28/2015.
 */
module.exports = function(grunt) {
    //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: ['build/']
        },


        includes: {
            build: {
                src: ['*.html', 'includes/*.html'],
                dest: 'build/',
                options: {
                    flatten: true,
                    banner: '<!-- Site built using includes! -->\n'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean', 'includes']);
    grunt.registerTask('default', ['build']);
}