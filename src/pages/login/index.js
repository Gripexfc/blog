
import React,{useState} from "react";
import http from "../../api/axios";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import { Input,Button,Form } from 'antd'
// import './index.css'


const LoginStyle = styled.div`
    background-color: #e8eaf2;
    .login {
        width: 450px;
        height: 180px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        padding: 12px;
        background-color: #fff;
        Button {
            width: 100%;
        }
    }
`
function Login() {
    const navigate = useNavigate()
    const [textAccount, useTextAccount] = useState();
    const [textPassword, useTextPassword] = useState()

    const onFinish = (values) => {
        http.post('/blogUsers/login', 
            JSON.stringify(values)
        ).then(() => {
            navigate('/')
        })

    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <LoginStyle>
             <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="login"
            >
                <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入你的用户名!' },{ pattern: /^[a-zA-Z\u4e00-\u9fa5]{1}[a-zA-Z0-9\u4e00-\u9fa5]{1,9}$/
                , message: "请输入2-10不以特殊符号开头的中文、字母或数字" }]}>
                <Input />
                </Form.Item>

                <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入你的密码!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
                </Form.Item>
            </Form>
        </LoginStyle>
    )
}

export default Login


