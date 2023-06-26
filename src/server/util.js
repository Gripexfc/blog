/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 20:11:54
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-19 15:13:09
 * @FilePath: \my-app\src\util.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {StaticRouter} from 'react-router-dom';
import React from 'react'
import { renderToString } from 'react-dom/server';
import {Route} from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import { Provider } from 'react-redux';
import store from '../store';
const util = (req) => {
    const content = renderToString (
        <Provider store={store}>
        <StaticRouter location={req.path}>
            <Route path='/home' exact element={<Home/>}></Route>
            <Route path='/login' exact element={<Login/>}></Route>
        </StaticRouter>
        </Provider>
    )

    return `
        <html>
        <head>
            <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="main.js"></script>
        </body>
        </html>
    `
}


export default util;