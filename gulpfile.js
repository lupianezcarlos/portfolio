let nodemon = require('gulp-nodemon');
let gulp = require('gulp');




gulp.task('hello',function() {
   nodemon({
       script: 'server/index.js',
       ext:'js',
       env: {
           PORT: 4000,
           'NODE_ENV': 'development'
       },
       ignore: ['node_modules/']
   })
   .on('restart',function() {
         console.log("restarting")
   })
})
