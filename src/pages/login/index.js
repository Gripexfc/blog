
import React,{useState} from "react";
import http from "../../api/axios";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
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
        }).then(res => {
            navigate('/')
            // window.location.hash = '/'
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


