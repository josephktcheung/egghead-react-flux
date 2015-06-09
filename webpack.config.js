var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('./lib/merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [path.join(ROOT_PATH, 'app/main.js')],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'jsx',
        include: path.join(ROOT_PATH, 'app')
      } ,{
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  },
};

var mergeConfig = merge.bind(null, common);

if(TARGET === 'build') {
  module.exports = mergeConfig({
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        title: 'Egghead React Flux',
        template: path.join(ROOT_PATH, 'app/index.tpl')
      })
    ],
  });
}

if(TARGET === 'dev') {
  var IP = '0.0.0.0';
  var PORT = 8080;

  module.exports = mergeConfig({
    ip: IP,
    port: PORT,
    entry: [
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/only-dev-server',
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'jsx'],
        include: path.join(ROOT_PATH, 'app')
      }]
    },
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({template: path.join(ROOT_PATH, 'dev-server/index.html')}),
    ]
  });
}