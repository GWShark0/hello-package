const path = require('path');
const webpack = require('webpack');

const PATHS = {
  script: path.resolve(__dirname, 'src', 'script'),
  dist: path.resolve(__dirname, 'dist'),
};

const config = {
  entry: {
    index: PATHS.script,
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
        include: PATHS.script,
        use: 'babel-loader',
      }
    ]
  },
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
