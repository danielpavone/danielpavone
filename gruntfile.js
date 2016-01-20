module.exports = function(grunt){
	'use strict';

	grunt.loadTasks('./tasks');

	grunt.registerTask('dev', ['concurrent:dev']);
    
    grunt.registerTask('prod', [
        'clean:build',
        'less:build',
        'copy:build_index',
        'htmlmin:build'
    ]);
	
};