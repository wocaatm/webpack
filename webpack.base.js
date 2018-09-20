const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

//
const entries = {
  entryA: './client/module/moduleA/index.js',
  entryB: './client/module/moduleB/index.js',
  entryC: './client/module/moduleC/index.js'
}


// function recursiveIssuer(m) {
//   if (m.issuer) {
//     return recursiveIssuer(m.issuer);
//   } else {
//     for (var chunk of m._chunks) {
//       return chunk["name"]
//     }
//     return false;
//   }
// }

// const entries = {
//   moduleA: './src/moduleA.js'
// }

// const entries = {
//   module: './src/modueNoRouter.js'
// }

//const entries = './src/index.js'

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
    // new htmlWebpackPlugin({
    //   title: '测试',
    //   template: 'index.html',
    //   filename:  'index.html',
    //   chunks: [entry, 'mainifest', 'vendor']
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new webpackBundleAnalyzer(),
    //new webpack.HashedModuleIdsPlugin()  // 建议在生产环境使用 nameModulePlugin() 建议在开发环境使用
  ],
  optimization: {
    splitChunks: {
      //name: false,
      cacheGroups: {
        // 所有的chunks的来自第三方的JS库会被打爆到chunk-vendors   vue-cli 3.0只对初始化chunks第三方打包
        // 覆盖了原有默认的webpack4的配置
        vendors: {
          name: 'chunk-vendor',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        // default: false,
        // 初始化的chunks 也就是入口chunks中只有有共用的就会被打包到chunk-common中
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -11,
          chunks: 'initial',
          minSize: 0
        },
        style: {
          name: 'common-style',
          test: (module) => {
            let condition1 = module.resource &&
                (
                    module.resource.indexOf(
                        path.join(__dirname, 'node_modules')
                    ) === 0 ||
                    module.resource.indexOf(
                        path.join(__dirname, 'client/assets')
                    ) === 0
                )
              
            let condition2 = module.constructor.name === 'CssModule'
            
            console.log(module.resource)
            console.log(module.constructor.name)
              
              console.log('=========end============')
            
            return condition1 && condition2
          },
            priority: -9,
            chunks: 'initial',
            minSize: 0
        }
        /* 这个是容易被忽略的一个使用的默认规则 */
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   minSize:0,
        //   reuseExistingChunk: true,
        // },
        // 只会提取所有的非vue文件里面的css样式
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true
        // }
        // fooStyles: {
        //   name: 'moduleA',
        //   test: (m,c,entry = 'moduleA') => {
        //     if (m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry) {
        //       console.log(recursiveIssuer(m))
        //     }
        //     return m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry
        //   },
        //   chunks: 'all',
        //   priority: -30
        // },
        // vendors: {
        //   name: 'chunk-vendors',
        //   test: /[\\\/]node_modules[\\\/]/,
        //   priority: -10,
        //   chunks: 'initial'
        // },
        // common: {
        //   name: 'chunk-common',
        //   minChunks: 2,
        //   priority: -20,
        //   chunks: 'initial',
        //   reuseExistingChunk: true
        // }
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true
        // }
      }
    },
    // splitChunks: {
    //   chunks: 'all',
    //   //name: false,
    //   cacheGroups: {
    //     vendor: {
    //       test: (module) => {
    //         return (
    //           module.resource &&
    //           /\.js$/.test(module.resource) &&
    //           module.resource.indexOf(
    //             path.join(__dirname, 'node_modules')
    //           ) === 0
    //         )
    //       },
    //       name: 'vendor',
    //       chunks: 'all',
    //       minSize: 0
    //     },
    //     common: {
    //       minC
    //     }
    //     // asyncVueQrcode: {
    //     //   chunks: (chunk) => {
    //     //     return chunk.name === 'jquery'
    //     //   },
    //     //   name: 'async-jquery',
    //     //   priority: 1   // 这个优先级需要比vendor大，不然这个chunk还是会被打包到vendor中
    //     // }
    //   }
    // },
    runtimeChunk: {
      name: 'mainifest'
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
      chunks: [entry]
    }))
  }
}


module.exports = baseConfig