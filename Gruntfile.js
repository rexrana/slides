module.exports = function(grunt) {

grunt.initConfig({
  sass: {
    dist: {
			options: {
				style: 'compressed'
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
  watch: {
    css: {
      files: 'scss/**/*.scss',
      tasks: ['sass'],
    },
  },
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['watch']);

}
