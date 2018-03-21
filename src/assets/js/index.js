import app from './app.js'
import loadScript from './tools/loadScript'

// If we have Promises Esketit
// but if we don't (IE) loadScript then app
if (window.Promise) {
  app()
} else {
  loadScript('assets/js/polyfills.js', app)
}
