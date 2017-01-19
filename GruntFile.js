module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	const	DOCS_SRC = 'docs/src/',
			DOCS_DEST = 'docs/dest/',
			TEST_DEST = 'test/build/';

	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),

		'clean': {
			css: ["dist/*.css"],
			js: ["dist/*.js"]
		},

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
			test: {
				files: {
					'test/build/lib.js': 'src/js/lib.es6.js',
					'test/build/DummySpec.js': 'test/js/spec/DummySpec.es6.js'
				}
			},
			dist: {
				files: {
					'dist/lib.js': 'src/js/lib.es6.js'
				}
			}

		},

		'webpack': {
			test: {
				entry: ['./' + TEST_DEST + 'lib.js', './'+ TEST_DEST + '/DummySpec.js'],
				output: {
					path: './' + TEST_DEST,
					filename: 'compiled.js'
				}
				/*,
				TODO: couldnt get this loader to work
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
					// directory: TEST_DEST,
					port: 8000
				}
			}
		},

		'jasmine': {
			src: [], // TEST_DEST + 'lib.compiled.js',
			options: {
				specs: TEST_DEST + 'compiled.js',
				outfile: TEST_DEST + '_SpecRunner.html',
				keepRunner: true
				// host: 'http://127.0.0.1:8000/'
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

	// TODO grunt copy for js, lint, uglify?
	grunt.registerTask('compile', ['clean', 'sass', 'babel:dist']);
	grunt.registerTask('default', ['compile']);
	grunt.registerTask('docs', ['compile', 'preprocess', 'gh-pages']);
	grunt.registerTask('test', ['babel:test', 'webpack', 'jasmine', 'connect:jasmine_site:keepalive']);
	grunt.registerTask('travis', ['babel:test', 'webpack', 'jasmine']);
};
