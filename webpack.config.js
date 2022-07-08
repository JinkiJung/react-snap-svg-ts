// Webpack uses this to work with directories
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.tsx'),
  bundles: path.resolve(__dirname, 'dist'),
}

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: {
    'bundle': [PATHS.entryPoint],
    'bundle.min': [PATHS.entryPoint]
  },
  module: {
    // Webpack doesn't understand TypeScript files and a loader is needed.
    // `node_modules` folder is excluded in order to prevent problems with
    // the library dependencies, as well as `__tests__` folders that
    // contain the tests for the library
    rules: [
      {test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'react-snap-svg-ts',
    umdNamedDefine: true
  },
};