const gulp = require('gulp')
const config = require('../config')
const production = config.production
const fs = require('fs')
const pug = require('@pixel2html/pipes').pug
const path = require('path')
const cheerio = require('cheerio')
const { cwd } = require('process')

const icon = (name, attributes) => {
  const file = path.join(cwd(), `src/assets/icons/${name}.svg`)
  const icn = fs.readFileSync(file, 'utf-8')
  const $ = cheerio.load(icn)
  const svg = $('svg')
  if (attributes) {
    const arr = Object.keys(attributes)
    arr.forEach(attr => svg.attr(attr, attributes[attr]))
  }
  return $('body').html()
}

gulp.task('markup', () =>
  gulp.src(config.directories.src.markup + '/*.pug')
    .pipe(pug({
      pug: {
        basedir: config.directories.src.markup,
        locals: {
          icon,
          production
        }
      },
      cssModules: `./${config.directories.src.cssModules}`,
      imgAutoSize: {
        root: `./${config.directories.dist.base}`,
        processEmptySize: true
      }
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.markup))
)
