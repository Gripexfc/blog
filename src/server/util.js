
import { StaticRouter, Route } from 'react-router-dom';
import React from 'react'
import { renderToString } from 'react-dom/server';
import routeList from '../router/index'
import { Provider } from 'react-redux';
import store from '../store';
const util = (req) => {
    const content = renderToString (
        <Provider store={store}>
        <StaticRouter location={req.path}>
            {
              routeList.map(element => {
                return (<Route key={element.path} path={element.path} exact element={<element.component/>}></Route>)
              })
            }
        </StaticRouter>
        </Provider>
    )

    return `
        <html>
        <head>
            <title>ssr</title>
            <link href='../style/default.css' />
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        <script defer src="main.js"></script>
        </html>
    `
}


export default util;