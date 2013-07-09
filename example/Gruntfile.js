module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        options: {
          ignoredFiles: [
            'README.md',
            'node_modules/**',
            '.gitignore/**',
            '.git/**',
            'public/js/bootstrap.js',
            'public/css/bootstrap.css',
            'public/img/**.*'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default',['nodemon']);
};
