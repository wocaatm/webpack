const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const entries = {
  moduleA: './client/module/moduleA/index.js',
  moduleB: './client/module/moduleB/index.js',
  moduleC: './client/module/moduleC/index.js',
}

function resolve (dir) {
    return path.join(__dirname, dir)
}

const baseConfig = {
  mode: 'none',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    /* 这个是解决使用node_modules vue的时候默认引入的是没有模板解析的，导致*.vue 中tempalte没有响应的loader去处理 */
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
        'assets': resolve('client/assets'),
    },
    symlinks: false
  },
  externals: {
    'element-ui': 'element-ui',
    vue:'Vue',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.posix.join('/', 'img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.posix.join('/', 'fonts/[name].[hash:7].[ext]')
            }
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new cleanWebpackPlugin(['dist/*']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    //new webpackBundleAnalyzer(),
    //new webpack.HashedModuleIdsPlugin()  // 建议在生产环境使用 nameModulePlugin() 建议在开发环境使用
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false
      }
    },
    concatenateModules: true
  }
}

for (let entry in entries) {
  if (entries.hasOwnProperty(entry)) {
    baseConfig.plugins.push(new htmlWebpackPlugin({
      title: entry,
      template: 'index.html',
      filename: entry + '.html',
      chunks: ['chunk-vendor', 'chunk-common', entry]
    }))
  }
}


module.exports = baseConfig