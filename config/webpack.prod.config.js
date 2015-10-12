var path = require('path');
var webpack = require('webpack');
var pkg = require('../package.json');
var filtedPackagesFromClientLib = ['skeleton-css', 'fbjs'];

module.exports = {
  context: path.join(__dirname, '..'),
  entry: {
    client: './src/client/client.tsx',
    server: './src/server/server.ts',
    clientlibs: Object.keys(pkg.dependencies).filter(function (lib) { return filtedPackagesFromClientLib.indexOf(lib) === -1 })
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'expose?app!babel!ts-loader'},
      { test: /\main.html$/, loader: 'file?name=client/main.html'},
      { test: /\.html$/, loader: 'file?name=client/[name].[hash].html', exclude: /\main.html$/},
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }}),  
    new webpack.optimize.CommonsChunkPlugin({ name: 'clientlibs', filename: 'client/lib.[chunkhash].js', chunks: ['client'] }),
    new webpack.ContextReplacementPlugin(/.*$/, /NEVER_MATCH^/)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  ts: {
    configFileName: "config/tsconfig.prod.json"
  }
};