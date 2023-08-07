
require('ignore-styles')
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', __dirname); // 使用当前目录作为根目录
require('@babel/register')({
  presets:['@babel/preset-env','@babel/preset-react']
})

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config'); 
const compiler = webpack(webpackConfig);
const express = require('express');
const serverRouter = require('./server/serverRouter');
const app = express();
// test
// 使用webpack-dev-middleware中间件
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

// 使用webpack-hot-middleware中间件
app.use(webpackHotMiddleware(compiler));

app.use(express.static('build'));
app.use(express.static('../static'));
app.use('*',serverRouter);

app.listen(3001);
