module.exports = function (grunt) {

    const srcDir = 'src';
    const buildDir = 'www';
    const nd_modules = 'node_modules';

    grunt.initConfig({
        jshint: {
            options: {
                esversion: 6,
                bitwise: true,
                curly: true,
                asi: false
            },
            all: 'src/**/**/*.js'
        },
        watch: {
            files: './src/**/*',
            tasks: ['build']
        },
        clean: {
            all: {
                src: [buildDir]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './src/**/*'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: buildDir
                    }
                }
            }
        },
        copy: {
            all: {
                cwd: srcDir,
                src: ['**', '!**/*-spec.js'],
                dest: buildDir,
                expand: true,
                options: {
                    processContentExclude: ['**/*.{png,gif,jpg,ico,psd}']
                }
            },
            angular: {
                cwd: nd_modules + '/angular/',
                src: ['angular.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            angularRoutes: {
                cwd: nd_modules + '/angular-route/',
                src: ['angular-route.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            bootstrap: {
                cwd: nd_modules + '/bootstrap/dist/js/',
                src: ['bootstrap.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            bootstrapCss: {
                cwd: nd_modules + '/bootstrap/dist/css/',
                src: ['bootstrap.min.css'],
                dest: buildDir + '/assets/',
                expand: true
            },
            jquery: {
                cwd: nd_modules + '/jquery/dist/',
                src: ['jquery.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            popper: {
                cwd: nd_modules + '/popper.js/dist/',
                src: ['popper.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            angularResource: {
                cwd: nd_modules + '/angular-resource/',
                src: ['angular-resource.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            dev: {
                reporters: 'spec'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('build', ['jshint:all', 'clean', 'copy']);
    grunt.registerTask('test', ['jshint:all', 'clean', 'copy', 'karma']);
    grunt.registerTask('default', ['jshint:all', 'clean', 'copy', 'browserSync', 'watch']);

};