module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		'sass': {
			dist: {
				files: {
					'dist/animation.css': 'src/animation.scss',
					'docs/css/animation.css': 'src/animation.scss',
					'docs/css/elements.css': 'docs/css/elements.scss'
				}
			}
		},
		'clean': {
			css: ["dist/*.css"]
		},
		'gh-pages': {
			options: {
				base: 'docs'
			},
			src: ['**']
		}
	});

	grunt.registerTask('compile', ['clean', 'sass']);
	grunt.registerTask('default', ['compile']);
	grunt.registerTask('docs', ['gh-pages']);
};
