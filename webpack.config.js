const config = require('./gulp/config')
const paths = require('./webpack/paths')

const commonPlugins = require('./webpack/commonPlugins')
const devPlugins = require('./webpack/developmentPlugins')
const productionPlugins = require('./webpack/productionPlugins')

const production = config.production
const debug = config.debug

let debugPlugins = []

if (debug) {
  debugPlugins = require('./webpack/debugPlugins')
}

let plugins = [ ...commonPlugins ]

const shouldBeDebugMode = production || debug

if (!shouldBeDebugMode) plugins = [...plugins, ...devPlugins]
if (shouldBeDebugMode) plugins = [...plugins, ...productionPlugins]
if (debug) plugins = [...plugins, ...debugPlugins]

process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'development'

if (shouldBeDebugMode) {
  process.env.NODE_ENV = 'production'
  process.env.BABEL_ENV = 'production'
}

// Making the demo-relationship work...
const { pixel2html } = config

const clientId = '0003065'
const projectId = '0004687'

const normalConfig = {
  entry: {
    main: paths.entry,
    polyfills: paths.polyfills
  },
  devtool: shouldBeDebugMode ? 'source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
              baseConfig: {
                extends: [require.resolve('@pixel2html/eslint-config')]
              },
              ignore: false,
              useEslintrc: false
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: paths.src
      },
      {
        test: /\.(js|jsx|mjs)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              require.resolve('@pixel2html/babel-preset')
            ],
            cacheDirectory: true
          }
        }
      }
    ]},
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: paths.output,
    // This needs to reflect with the server so codeSplit works
    // just for pixel2html demos
    publicPath: pixel2html
      ? `/${clientId}/${projectId}/assets/js/`
      : '/assets/js/'
  },
  plugins,
  externals: shouldBeDebugMode ? {
    jquery: 'jQuery'
  } : {},
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  resolve: {
    alias: {
      styles: paths.styles
    }
  },
  bail: shouldBeDebugMode,
  mode: production ? 'production' : 'development'
}

module.exports = [
  normalConfig,
]
