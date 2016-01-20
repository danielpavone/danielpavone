module.exports = function(grunt){
	'use strict';

	grunt.config('less', {
		build: {
			options: {
				compress: true,
				cleancss: true,
				yuicompress: true,
				optimization: 2
			},
			files: {
				'dist/assets/css/style.min.css': [
					'project/assets/bower_components/sanitize-css/dist/sanitize.min.css',
					'project/assets/bower_components/bootstrap/less/bootstrap.less',
					'project/assets/bower_components/font-awesome/font-awesome.min.css',
//					'project/assets/css/components/base/variable.less',
//					'project/assets/css/components/base/base.less',
					'project/assets/css/components/**/*.less'		
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
};