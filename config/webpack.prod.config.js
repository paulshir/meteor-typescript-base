var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..'),
  entry: {
    client: './src/client/client.tsx',
    server: './src/server/server.ts',
    clientlibs: ['react', 'react-dom', 'normalize-css']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'babel!ts-loader'},
      { test: /\.html$/, loader: 'file?name=client/[name].html'},
      { test: /\.css$/, loader: 'style!css!cssnext' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  output: {
    filename: '[name]/main.js',
    path: path.join(__dirname, '..', 'build')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'clientlibs', filename: 'client/libs.js', chunks: ['client'] })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  ts: {
    configFileName: "config/tsconfig.prod.json"
  }
};