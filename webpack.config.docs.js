const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  docs_src: path.resolve(__dirname, 'docs', 'src'),
  public: path.resolve(__dirname, 'docs', 'public'),
};

const config = {
  entry: {
    index: PATHS.docs_src,
  },
  output: {
    path: PATHS.public,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [PATHS.src, PATHS.docs_src],
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [PATHS.src, PATHS.docs_src],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader',
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: PATHS.docs_src + '/index.html'
    })
  ],
};

module.exports = config;
