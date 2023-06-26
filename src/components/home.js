/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 20:15:46
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-26 21:03:21
 * @FilePath: \my-app\src\components\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { connect } from 'react-redux';
import {addState} from '../store/actions'
// import addState from '../store/actions'
function Home({list,addState}) {
    return (
        <div>
        <div>{list}</div>
        <button onClick={addState}>Decrement</button>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.newsList,
  });
const mapDispatchToProps = dispatch => ({
    // addState: () => dispatch({ type: 'CHANGE_LIST',list: [5] }),
    addState() {
        console.log(addState,'addState123');
      dispatch(addState())
    }
  });

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);