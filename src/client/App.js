
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
                return (<Route key={element.path} path={element.path} exact element={<element.component/>}></Route>)
              })
            }
          </Routes>
        </HashRouter>
        </Provider>
    )
  }
}
export default App