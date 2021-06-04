const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  watchOptions: {
    ignored: ['node_modules/**'],
  },
  // display no info to console (only warnings and errors)
  noInfo: false,
  publicPath: config.output.publicPath,
  contentBase: 'source',
  stats: config.stats,
  historyApiFallback: {
    index: "/"
  },
})

server.listen(3333, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Webpack is listening at http://localhost:3333.')
  console.log('Please wait. Building...')
})
