module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	const	DOCS_SRC = 'docs/src/',
			DOCS_DEST = 'docs/dest/';

	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),

		'sass': {
			dist: {
				files: {
					'dist/animation.css': 'src/animation.scss',
					'docs/dest/css/animation.css': 'src/animation.scss',
					'docs/dest/css/elements.css': DOCS_SRC + 'css/elements.scss',
					'docs/dest/css/jekyll-github.css': DOCS_SRC + 'css/jekyll-github.css' // this doesnt need processing, just mv to dest
				}
			}
		},

		'clean': {
			css: ["dist/*.css"]
		},

		'preprocess': {
			// preprocess docs
			options: {
				context: {
					'VERSION': '<%= package.version %>',
					'DESCRIPTION': '<%= package.description %>',
					'CSS_SASSQUATCH': 'https://meetup.github.io/sassquatch2/bundle/sassquatch.css',
					'CSS_FONT': 'https://secure.meetupstatic.com/fonts/graphik.css'
				},
			},
			docs: {
				src: DOCS_SRC + 'index.html',
				dest: DOCS_DEST + 'index.html'
			}
		},

		'gh-pages': {
			options: {
				base: 'docs'
			},
			src: ['**']
		},

		'jekyll': {
			options: {
				src: 'docs/dest',
				// highlighter: 'rouge'
			},
			serve: { 
				options: {
					serve: true
				}
			}
		}
	});

	grunt.registerTask('compile', ['clean', 'sass']);
	grunt.registerTask('default', ['compile']);
	grunt.registerTask('docs', ['compile', 'preprocess', 'gh-pages']);
	grunt.registerTask('local-docs', [ 'compile', 'preprocess', 'jekyll']); 
};
