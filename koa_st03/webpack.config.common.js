const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));
const loader = argv.config.split('.')[argv.config.split('.').length - 2];
const path = `./public/${loader}`;

const config = {
  entry: './client/app.ts',
  output: {
    path,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [
      { test: /\.tsx?$/, loader: 'tslint' }
    ]
  },
  devServer: {
    contentBase: path,
    port: '11080',
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })];
}
/* global console */

module.exports = config;
