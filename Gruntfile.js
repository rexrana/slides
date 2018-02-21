module.exports = function (grunt) {
	var port = grunt.option('port') || 8000;
	var base = grunt.option('base') || '.';

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: port,
                    base: base,
                    livereload: true,
                    open: true
                }
            }
        },

				watch: {
					options: {
						livereload: true
					},
					css: {
						files: 'scss/**/*.scss',
						tasks: ['sass'],
					},
					html: {
						files: '**/*.html'
					}
				},
			});

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Serve presentation locally and watch for changes
    grunt.registerTask('serve', ['connect', 'watch']);

    grunt.registerTask('default', ['watch']);

}
