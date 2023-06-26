/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 22:06:37
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-19 15:04:51
 * @FilePath: \my-app\src\store\reducer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const defaultState = {
    name: 'sanyuan',
    newsList: [9]
  };
  
  export default (state = defaultState, action) => {
    switch(action.type) {
      case 'CHANGE_LIST':
        const newState = {
          ...state,
          newsList: action.list
        };
        return newState;
      default:
        return state;
    }
  }