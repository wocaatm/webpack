const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const entries = {
  index: './src/index.js',
  app: './src/app.js'
}



const baseConfig = {
  mode: 'none',
  entry: entries,
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
  },
  plugins: [
    new cleanWebpackPlugin(['dist/*'])
    //new webpack.HashedModuleIdsPlugin()  // 建议在生产环境使用 nameModulePlugin() 建议在开发环境使用
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: (module) => {
            return (
              module.resource &&
              /\.js$/.test(module.resource) &&
              module.resource.indexOf(
                path.join(__dirname, 'node_modules')
              ) === 0
            )
          },
          name: 'app',
          chunks: () => {
            return true
          },
          minSize: 0,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'mainifest'
    }
  }
}

for (let entry in entries) {
  if (entries.hasOwnProperty(entry)) {
    baseConfig.plugins.push(new htmlWebpackPlugin({
      title: entry,
      filename: entry + '.html',
      chunks: [entry, 'mainifest', 'vendor']
    }))
  }
}


module.exports = baseConfig