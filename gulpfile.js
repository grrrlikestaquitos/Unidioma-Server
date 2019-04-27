const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')


gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'))
})

gulp.task('develop', (done) => {
    const stream = nodemon({
        script: 'dist/main.js',
        ext: 'ts js',
        ignore: ['dist/', 'node_modules/'],
        tasks: ['default'],
        done: done
    })
  
    stream.on('restart', () => {
        console.log('restarted!')
    }).on('crash', (error) => {
        console.error(`Application has crashed! ${error}\n`)
        stream.emit('restart', 3)  // restart the server in 10 seconds
    })
})