/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 21:26:52
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-19 14:33:28
 * @FilePath: \my-app\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer';

const store = createStore(reducer);

export default store;
