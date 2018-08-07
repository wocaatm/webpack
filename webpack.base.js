const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: '/\.css$/',
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}