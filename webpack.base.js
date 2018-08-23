const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//
// const entries = {
//   index: './src/index.js',
//   app: './src/app.js'
// }

const entries = './src/index.js'



const baseConfig = {
  mode: 'none',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new cleanWebpackPlugin(['dist/*']),
    new htmlWebpackPlugin({
      title: '测试',
      template: 'index.html',
      filename:  'index.html',
      //chunks: [entry, 'mainifest', 'vendor']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
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
          name: 'vendor',
          chunks: 'all',
          minSize: 0
        },
        asyncVueQrcode: {
          chunks: (chunk) => {
            return chunk.name === 'jquery'
          },
          name: 'async-jquery',
          priority: 1   // 这个优先级需要比vendor大，不然这个chunk还是会被打包到vendor中
        }
      }
    },
    runtimeChunk: {
      name: 'mainifest'
    },
    concatenateModules: true
  }
}

// for (let entry in entries) {
//   if (entries.hasOwnProperty(entry)) {
//     baseConfig.plugins.push(new htmlWebpackPlugin({
//       title: entry,
//       template: 'index.html',
//       filename: entry + '.html',
//       chunks: [entry, 'mainifest', 'vendor']
//     }))
//   }
// }


module.exports = baseConfig