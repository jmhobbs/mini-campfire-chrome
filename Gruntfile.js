module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		less: {
			production: {
				options: {
					paths: ["minicampfire/src"],
					cleancss: true
				},
				files: {
					"minicampfire/src/miniCF.css": "minicampfire/src/miniCF.less"
				}
			}
		},
		jshint: {
			all: ["minicampfire/*.js"]
		}
	});

	grunt.registerTask('default', ['less:production', "jshint:all"]);
};
