module.exports = function (grunt) {
 
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),        
	meta: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      	},
 
        // 壓縮 CSS 文件
        cssmin: {
            options: {
                report: 'gzip'
            },
            combine: {
                files: {
                  'css/index.css': ['css/header.css',
                                     'css/main.css',
                                     'css/footer.css'],
                }
            }
        },
 
        // 壓縮合併 JS 文件
        uglify: {
            options: {
                report: 'gzip',
                mangle: true, // Specify mangle: false to prevent changes to your variable and function names.                
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'

            },
            myTarget: {
                files: {
                    'prod/index.min.js': ['dev/test1.js','dev/test2.js','dev/test3.js'],
		    'prod/index2.min.js': ['dev/test2.js', 'dev/test3.js'],
                }
            }
        },
	copy: {
            main: {
                files: [                    
                    {src: ['dev/utility.js'], dest: 'js/mplus.utility.js'},
                ]
            }
        },    
	index:{
		src:'dev/index.tmpl',
		dest:'prod/index.html',
	},
    });

    grunt.registerTask( "index", "Generate index.html depending on configuration", function() {
        var conf = grunt.config('index'),
            tmpl = grunt.file.read(conf.src);
	
        grunt.file.write(conf.dest, grunt.template.process(tmpl));

        grunt.log.writeln('Generated \'' + conf.dest + '\' from \'' + conf.src + '\'');
    });

 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dev', 'development build', function(){
	grunt.config('isProd', false);
	grunt.task.run(['uglify','index']);
    });

    grunt.registerTask('prod', 'production build', function(){
        grunt.config('isProd', true);
        grunt.task.run(['uglify','index']);
    });


    grunt.registerTask('default', 'dev'); 
};
