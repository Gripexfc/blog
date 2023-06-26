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
      }
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