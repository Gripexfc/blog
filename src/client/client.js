/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 19:12:23
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-26 17:38:12
 * @FilePath: \my-app\src\client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../api/axios'

// hydrate渲染，看见服务端已经渲染好的dom，就不会再次渲染
ReactDOM.hydrate(<App />, document.getElementById('root'))