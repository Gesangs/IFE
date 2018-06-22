const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/js/app.js',

  // 输出   
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
      },
      {
        test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],

    extensions: [".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    //  压缩 
    new UglifyPlugin(),
    // 生成HTML
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),
    new ExtractTextPlugin('index.css')
  ],
}
