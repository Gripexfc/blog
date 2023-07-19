
const path = require('path')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
//省略其它代码
const webpackConfig = {
  mode: 'development',
  entry: './src/client/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  cache: {
    type: 'memory', // 或者 'filesystem'
  },
  experiments: {
    topLevelAwait: true,
  },
  // externals: {
  //   // 将以下包设为外部引用
  //   'antd': 'antd',
  //   'axios': 'axios',
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'react-redux': 'ReactRedux',
  //   'redux': 'Redux',
  //   'styled-components': 'styled',
  //   'react-router-dom': 'ReactRouterDOM',
  //   'react-router-config': 'ReactRouterConfig',
  //   // 其他需要设为外部引用的包
  // },
  parallelism: 4, // 根据你的 CPU 核心数设置合适的值
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
        exclude: /node_modules/,
        use: {
            loader: 'file-loader',
            options: { //file-loader配置项
                //placeholder 占位符
                name: '[name].[ext]',//保持打包后的图片名字和原来一样
                outputPath: 'images/'
                //打包后的图片输出到images文件夹中
            }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  devServer: {
    static: './build',
    hot: true,
  },
  plugins:[
      // new HtmlWebpackPlugin({
      //   filename: path.resolve(__dirname, 'build/index.html'),
      //   template:  path.resolve(__dirname, './public/index.html'), 
      // })
  ]
};

module.exports = smp.wrap(webpackConfig);