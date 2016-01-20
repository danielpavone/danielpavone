module.exports = function(grunt){
	'use strict';

	grunt.config('copy', {
		build_index: {
			files: [{
				expand: true,
				cwd: 'project/',
				src: ['index.html'],
				dest: 'dist/'
			}]
		},
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
};