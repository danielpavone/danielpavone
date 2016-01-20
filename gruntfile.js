module.exports = function(grunt){
	'use strict';

	grunt.loadTasks('./tasks');

	grunt.registerTask('dev', ['concurrent:dev']);
	
};