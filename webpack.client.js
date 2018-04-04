const path = require('path');
const merge = require('webpack-merge');

const base = require('./webpack.base.js');

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'src/client/assets/stylesheets/stylesheet.css'),
      },
    ],
  },
};

module.exports = merge(base, config);
