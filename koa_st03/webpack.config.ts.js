const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' }
    ]
  },
  ts: {
    configFileName: 'tsconfig.client.json'
  }
});
