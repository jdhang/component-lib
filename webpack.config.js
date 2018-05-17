const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'lib/index')
  ],
  output: {
    path: __dirname + '/',
    filename: 'index.js',
    library: '',
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|tools)/,
        include: path.join(__dirname, 'lib'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};