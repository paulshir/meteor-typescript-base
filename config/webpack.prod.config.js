var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..'),
  entry: {
    client: './src/client/client.tsx',
    server: './src/server/server.ts'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'expose?app!ts-loader'},
      { test: /\.html$/, loader: 'file?name=client/[name].html'},
      { test: /\.css$/, loader: 'style!css!cssnext' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  output: {
    filename: '[name]/[name].js',
    sourceMapFilename: '[name]/[name].js.map',
    path: path.join(__dirname, '..', 'build')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  ts: {
    configFileName: "config/tsconfig.dev.json"
  }
};