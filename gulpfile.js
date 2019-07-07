const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('dist'))
})

gulp.task('develop', (done) => {
    const stream = nodemon({
        script: 'dist/main.js',
        ext: 'ts js env',
        ignore: ['dist/', 'node_modules/'],
        done: done
    })
  
    stream.on('restart', () => {
        console.log('restarted!')
    }).on('crash', (error) => {
        console.error(`Application has crashed! ${error}`)
    })
})