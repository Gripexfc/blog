/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-28 13:52:21
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-07-01 23:41:30
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
import styled from 'styled-components';
// import './index.css'

const Img = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
`

const LoginDiv = styled.div`
    width: 400px;
    height: 300px;
    border: 2px solid red;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`
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
    }
    return (
        <div>
            <Img src={require('../../../static/bg.jpg').default}></Img>
            <LoginDiv>
                <div>
                    <span>账号</span>
                    <input type="input" name="" value={textAccount} onChange={onAccount}/>
                </div>
                <div>
                    <span>密码</span>
                    <input type="password" name="" value={textPassword} onChange={onPassword}/>
                </div>
                <button onClick={submit}>登录</button>
            </LoginDiv>
        </div>
    )
}

export default Login


