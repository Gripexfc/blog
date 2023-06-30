/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-28 13:52:21
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-30 17:08:44
 * @FilePath: \my-app\src\pages\login\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// /*
//  * @Author: fanchen 2837903280@qq.com
//  * @Date: 2023-06-28 13:52:21
//  * @LastEditors: fanchen 2837903280@qq.com
//  * @LastEditTime: 2023-06-29 14:15:46
//  * @FilePath: \my-app\src\pages\login\index.js
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
import React,{useState} from "react";
import http from "../../api/axios";
import './index.css'
function Login() {
    const [textAccount, useTextAccount] = useState();
    const [textPassword, useTextPassword] = useState()
    const onAccount = (e) => {
        useTextAccount(e.target.value)
    }
    const onPassword = (e) => {
        useTextPassword(e.target.value)
    }
    const submit = () => {
        http.post('/login', {
            username: textAccount,
            password: textPassword
        })
        // http.post('/login',{
        //     'key': '122549'
        // }).then(res => {
        //     console.log(res,'res');
        // })
        console.log('登录');
    }
    return (
        <div>
            <img className="bg" src={require('../../../static/bg.jpg').default}></img>
            <div className="login">
                <div>
                    <span>账号</span>
                    <input type="input" name="" value={textAccount} onChange={onAccount}/>
                </div>
                <div>
                    <span>密码</span>
                    <input type="password" name="" value={textPassword} onChange={onPassword}/>
                </div>
                <button onClick={submit}>登录</button>
            </div>
        </div>
    )
}

export default Login


