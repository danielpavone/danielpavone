module.exports = function(grunt){
	'use strict';

	grunt.config('less', {
		build: {
			files: {
				'dist/assets/css/styles.min.css': [
					'project/assets/bower_components/sanitize-css/dist/sanitize.min.css',
					'project/assets/bower_components/bootstrap/less/bootstrap.less',
					'project/assets/bower_components/font-awesome/less/font-awesome.less',
					'project/assets/bower_components/roboto-fontface/css/roboto-fontface.less',
					'project/assets/css/components/**/*.less'		
				]
			}
		},
        dist: {
            options: {
                compress: true,
                cleancss: true,
                yuicompress: true,
                optimization: 2
            },
            files: {
                'dist/assets/css/styles.min.css': [
                    'dist/assets/css/styles.min.css'
                ]
            }
        }
	});
	grunt.loadNpmTasks('grunt-contrib-less');
};