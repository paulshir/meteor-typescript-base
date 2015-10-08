var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..'),
  devtool: 'eval',
  entry: {
    client: './src/client/client.tsx',
    server: './src/server/server.ts',
    clientlibs: ['react', 'react-dom', 'normalize-css']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'expose?app!babel!ts-loader'},
      { test: /\.html$/, loader: 'file?name=client/[name].html'},
      { test: /\.css$/, loader: 'style!css!cssnext' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  output: {
    filename: '[name]/main.js',
    sourceMapFilename: '[name]/main.js.map',
    path: path.join(__dirname, '..', 'build')
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'clientlibs', filename: 'client/libs.js', chunks: ['client'] })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  ts: {
    configFileName: 'config/tsconfig.dev.json'
  }
};