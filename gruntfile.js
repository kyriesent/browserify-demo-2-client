grunt = require('grunt');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 9999,
        hostname: '*',
        keepalive: true,
      }
    }
  }
});

grunt.registerTask('serve', 'connect:server')