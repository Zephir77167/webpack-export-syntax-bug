const path = require('path');
const webpack = require('webpack');

const babelSettings = {
  extends: path.join(__dirname, '.babelrc'),
  cacheDirectory: true,
};

const roots = [
  path.join(__dirname, 'node_modules'),
  path.join(__dirname, 'client'),
];

const config = {
  name: 'app',
  target: 'web',
  devtool: 'inline-source-map',
  entry: './client/src/entry/js/main',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public/dist'),
    publicPath: '/dist/',
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: babelSettings,
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    modules: roots,
  },
  resolveLoader: {
    modules: roots,
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

module.exports = config;
