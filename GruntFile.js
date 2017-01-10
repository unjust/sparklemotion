module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	const	DOCS_SRC = 'docs/src/',
			DOCS_PROC = 'docs/processed/',
			DOCS_DEST = 'docs/dest/';

	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),

		'clean': {
			css: ["dist/*.css", 'docs/processed']
		},

		'sass': {
			dist: {
				files: {
					'dist/animation.css': 'src/animation.scss',
					// for jekyll
					'docs/src/css/animation.css': 'src/animation.scss',
					'docs/src/css/doc_styles.css': DOCS_SRC + 'css/doc_styles.scss',
					'docs/src/css/jekyll-github.css': DOCS_SRC + 'css/jekyll-github.css' 
					'docs/dest/css/animation.css': 'src/animation.scss',
					'docs/dest/css/doc_styles.css': DOCS_SRC + 'css/doc_styles.scss',
					'docs/dest/css/jekyll-github.css': DOCS_SRC + 'css/jekyll-github.css' // this doesnt need processing, just mv to dest
				}
			}
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
				html: {
					files: {
					'docs/src/index.html' : DOCS_SRC + 'index.pre.html',
					'docs/dest/index.html': DOCS_SRC + 'index.pre.html'
				}
			}
		},

		'gh-pages': {
			options: {
				base: DOCS_DEST
			},
			src: ['**']
		},

		'jekyll': {
			options: {
				src: DOCS_SRC,
				dest: DOCS_DEST,
				watch: true
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
	grunt.registerTask('local-docs', [ 'compile', 'preprocess', 'jekyll']); 
	grunt.registerTask('docs', ['local-docs', 'gh-pages']);
};
