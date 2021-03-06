const config = require('./gulp/config')
const gulp = require('gulp')
const prod = config.production

const common = [
  'cssModulesWrite',
  'fonts', 'markup',
  'scripts', 'static',
  'styles'
]
const development = [
  'serve', 'watch'
]
const production = [
  'minifyStyles', 'purify',
  'styles-production', 'zip',
  'critical'
]

common.forEach(file => require(`./gulp/common/${file}`))
prod
  ? production.forEach(file => require(`./gulp/production/${file}`))
  : development.forEach(file => require(`./gulp/development/${file}`))

const prodTasks = [
  'minifyStyles',
  'purify',
  'critical',
  'zip',
]

let tasks = [
  'clean',
  config.production ? 'styles:prod' : 'styles',
  'images', 'head',
  'scripts', 'fonts',
  'markup',
  prod && [...prodTasks]
]

const filteredTasks = tasks.filter(task => !!task)
gulp.task('build', gulp.series(...filteredTasks))

if (prod) {
  gulp.task('release', gulp.series('build', 'zip'))
} else {
  gulp.task('serve', gulp.parallel('browser-sync', 'watch'))
  gulp.task('default', gulp.series('build', 'serve'))
}
