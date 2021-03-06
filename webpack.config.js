const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

const ExtractStyles = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

const API_URL = process.env.API_URL || 'http://localhost:8080';

const VENDOR_LIBS = [
  'react',
  'lodash',
  'redux',
  'react-redux',
  'react-dom',
  'redux-thunk',
  'babel-polyfill',
  'react-bootstrap'
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
  devtool: process.env.NODE_ENV === 'development'
    ? 'source-map'
    : '',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: process.env.NODE_ENV !== 'development'
          ? ExtractStyles.extract({
            use: [
              {
                loader: "css-loader"
              }, {
                loader: "sass-loader",
                options: {
                  includePaths: ['src/common/scss'].map((d) => path.join(__dirname, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
                }
              }
            ]
          })
          : [
            {
              loader: 'style-loader'
            }, {
              loader: "css-loader"
            }, {
              loader: "sass-loader",
              options: {
                includePaths: ['src/common/scss'].map((d) => path.join(__dirname, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
              }
            }
          ]
      }, {
        test: /\.less$/,
        use: process.env.NODE_ENV !== 'development'
          ? ExtractStyles.extract({
            use: [
              {
                loader: "css-loader"
              }, {
                loader: "less-loader",
                options: {
                  includePaths: ['src/common/less'].map((d) => path.join(__dirname, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
                }
              }
            ]
          })
          : [
            {
              loader: 'style-loader'
            }, {
              loader: "css-loader"
            }, {
              loader: "less-loader",
              options: {
                includePaths: ['src/common/less'].map((d) => path.join(__dirname, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
              }
            }
          ]
      }, {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      }, {
        test: /\.png($|\?)|\.jpe?g($|\?)/,
        loaders: [
          {
            loader: 'file-loader',
            query: {
              useRelativePath: false,
              name: '[name].[hash].[ext]',
              outputPath: 'img/',
              publicPath: '/img/',
              emitFile: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ExtractStyles,
    new HtmlReplaceWebpackPlugin([
      {
        pattern: '@@API_URL',
        replacement: API_URL.replace(/^(https?)?(:?\/\/)*(.+)/, "//$3")
      },
      {
        pattern: '@@API_URL_IE',
        replacement: API_URL.replace(/^(https?)?(:?\/\/)*(.+)/, "$1$2$3")
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/
      {
        from: './src/img',
        to: './img'
      }, {
        from: './src/manifest.json',
        to: './manifest.json'
      }, {
        from: './src/favicon.ico',
        to: './favicon.ico'
      }, {
        from: './src/browserconfig.xml',
        to: './browserconfig.xml'
      }, {
        from: './src/.htaccess',
        to: './'
      }
    ], {
        ignore: [],
        copyUnmodified: true
      }),
    new webpack
      .optimize
      .CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ]
};
