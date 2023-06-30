/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 19:20:26
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-29 14:41:35
 * @FilePath: \my-app\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
// const HtmlWebpackPlugin =require('html-webpack-plugin')

module.exports = {
  entry: './src/client/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|png|gif)$/, //打包的文件以jpg,png,gif结尾
        use: {
            loader: 'file-loader',
            options: { //file-loader配置项
                //placeholder 占位符
                name: '[name]_[hash].[ext]',//保持打包后的图片名字和原来一样
                outputPath: 'images/'
                //打包后的图片输出到images文件夹中
            }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  devServer: {
    static: './build',
    hot: true,
  },
  // plugins:[
  //     new HtmlWebpackPlugin({
  //       filename: path.resolve(__dirname, 'build/index.html'),
  //       template:  path.resolve(__dirname, './public/index.html'), 
  //     })
  // ]
};