/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-13 10:25:53
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-28 15:02:01
 * @FilePath: \my-app\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{Component} from 'react';
import { HashRouter,Route,Routes} from 'react-router-dom';
import routeList from '../router'
import { Provider } from 'react-redux';
import store from '../store';
class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes>
            {
              routeList.map(element => {
                return (<Route path={element.path} exact element={<element.component/>}></Route>)
              })
            }
          </Routes>
        </HashRouter>
        </Provider>
    )
  }
}
export default App