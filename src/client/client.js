
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../api/axios'

// hydrate渲染，看见服务端已经渲染好的dom，就不会再次渲染
ReactDOM.hydrate(<App />, document.getElementById('root'))