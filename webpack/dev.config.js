var path = require('path');

module.exports = {
  context: path.join(__dirname, '..'),
  entry: {
    client: './scripts/client/client.tsx',
    server: './scripts/server/server.ts'
  },
  output: {
    filename: '[name]/[name].js',
    path: path.join(__dirname, '..', 'build')
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'expose?mtb!ts-loader'}
    ]
  }
};