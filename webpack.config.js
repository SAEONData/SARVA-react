const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cwd = process.cwd()

/**
 * Config
 */
module.exports = {
  context: path.join(cwd, 'app'),
  mode: 'production',
  entry: {
    app: ['./js/index.jsx'],
    react: ['react', 'react-dom', 'react-router-dom', 'react-router', 'redux', 'react-redux', 'react-router-redux', 'react-tap-event-plugin', 'history'],
  },

  output: {
    path: path.resolve('dist'),
    filename: 'bundle_[name].js'
  },

  module: {
    rules: [{
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
    new webpack.IgnorePlugin(/^(fs|ipc)$/)
  ]
}