const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

module.exports = {
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined, // enable sourcemaps for debugging webpack output
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: [path.resolve(__dirname, 'source', 'index.ts')],
  },

  resolve: {
    extensions: ['.ts', '.js', '.css'],
    symlinks: false,
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },

  watchOptions: {
    ignored: /node_modules/,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            projectReferences: true,
          }
        },
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      {
        // Assets dir is copied into publish dir,
        // that is why it is not needed to copy them
        // when referenced in code (import image from 'assets/image.png').
        include: path.resolve(__dirname, 'source/assets'),
        use: [{
          loader: 'file-loader',
          options: {
            regExp: /assets[\\\/](.*)$/,
            name: 'assets/[1]',
            emitFile: false,
          }
        }],
      },
      {
        // All other files will be copied into ui folder
        test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
        exclude: path.resolve(__dirname, 'source/assets'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }],
      },
    ],
  },

  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          safari10: true
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      scriptLoading: 'defer',
    }),
    new HtmlWebpackDeployPlugin({
      assetsPath: './',
      assets: {
        copy: [
          { from: 'source/assets', to: 'assets' },
          { from: 'source/404.html', to: '404.html' },
        ],
      },
    }),
    new ESLintPlugin({
      extensions: ['ts'],
    }),
    new FilterWarningsPlugin({
      exclude: /Critical dependency: the request of a dependency is an expression|typescript(\\|\/)lib(\\|\/)typescript.js.map|Can't resolve 'perf_hooks'/,
    }),
  ],

  stats: {
    // With console colors
    colors: true,
    // add the hash of the compilation
    hash: true,
    // add webpack version information
    version: false,
    // add timing information
    timings: true,
    // add assets information
    assets: false,
    // add chunk information
    chunks: false,
    // add built modules information to chunk information
    chunkModules: false,
    // add built modules information
    modules: false,
    // add also information about cached (not built) modules
    cached: false,
    // add information about the reasons why modules are included
    reasons: false,
    // add the source code of modules
    source: false,
    // add details to errors (like resolving log)
    errorDetails: true,
    // add the origins of chunks and chunk merging info
    chunkOrigins: false,
    // Add messages from child loaders
    children: false,
  },
}
