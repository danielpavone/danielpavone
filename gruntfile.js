module.exports = function(grunt){
	'use strict';

	grunt.loadTasks('./tasks');

	grunt.registerTask('dev', ['concurrent:dev']);
    
    grunt.registerTask('prod', [
        'clean:build',
        'less:build',
        'uglify:build',
        'copy:build',
        'purifycss:build',
        'less:dist',
        'replace:build',
        'htmlmin:build'
    ]);
	
};