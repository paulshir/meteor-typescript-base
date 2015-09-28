var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..'),
  entry: {
    client: './src/client/main.tsx',
    server: './src/server/server.ts'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'expose?mtb!ts-loader'},
      { test: /\.html$/, loader: 'file?name=client/[name].html'},
      { test: /\.css$/, loader: 'style!css!cssnext' }
    ]
  },
  output: {
    filename: '[name]/[name].js',
    sourceMapFilename: '[name]/[name].js.map',
    path: path.join(__dirname, '..', 'build')
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  ts: {
    configFileName: "config/tsconfig.json"
  }
};