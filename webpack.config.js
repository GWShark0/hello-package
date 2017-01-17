const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const config = {
  entry: {
    index: PATHS.src,
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    library: 'HelloPackage',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: PATHS.src,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader',
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
};

module.exports = config;
