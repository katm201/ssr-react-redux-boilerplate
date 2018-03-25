const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.base.js');

const config = {
  target: 'node',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [nodeExternals()],
};

module.exports = merge(base, config);
