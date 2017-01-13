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
					'docs/dest/css/elements.css': DOCS_SRC + 'css/elements.scss'
				}
			}
		},

		'babel': {
			options: {
				presets: ['es2015']
			},
			dist: {
				files: {
					'src/js/lib.js': 'src/js/lib.es6.js',
					'test/js/spec/DummySpec.js': 'test/js/spec/DummySpec.es6.js'
				}
			}

		},

		'webpack': {
			hello: {
				entry: ['./src/js/lib.js', './test/js/spec/DummySpec.js'],
				output: {
					path: './testBuild',
					filename: 'FinalSpec.js'
				}
				/*,
				module: {
					loaders: [{
						test: /\.es6.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader'
					}]
				}*/
			}
		},

		'webpack-dev-server': {},

		'connect': {
			jasmine_site: {
				options: {
					port: 8000
				}
			}
		},

		'jasmine': {
			src: [],
			options: {
				specs: 'testBuild/FinalSpec.js',
				// outfile: 'test/js/_SpecRunner.html'
				// host: 'http://127.0.0.1:8000/'
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
		}
	});

	grunt.registerTask('compile', ['clean', 'sass']);
	grunt.registerTask('default', ['compile']);
	grunt.registerTask('docs', ['compile', 'preprocess', 'gh-pages']);
	grunt.registerTask('test', ['babel', 'webpack', 'connect:jasmine_site', 'jasmine']);
	grunt.registerTask('travis', ['babel', 'webpack', 'jasmine']);
};
