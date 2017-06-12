const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'redux-thunk', 'redux-devtools-extension', 'babel-polyfill'
];

module.exports = {
  entry: {
    // entry point
    main: './src/index.js',
    vendor: VENDOR_LIBS
  },
  // build folder
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  // make the node server play nicely with React router
  devServer: {
    historyApiFallback: true,
    publicPath: '/'
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ['src/common/scss']
              .map((d) => path.join(__dirname, d))
              .map((g) => glob.sync(g))
              .reduce((a, c) => a.concat(c), [])
          }
        }]
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/
      { from: './src/img', to: './img' },
      { from: './src/manifest.json', to: './manifest.json' },
      { from: './src/favicon.ico', to: './favicon.ico' },
      { from: './src/browserconfig.xml', to: './browserconfig.xml' },
      { from: './src/.htaccess', to: './' }
    ], {
        ignore: [],
        copyUnmodified: true
      }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
