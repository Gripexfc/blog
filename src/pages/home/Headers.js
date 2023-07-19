
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'
import './head.css'

const Img = styled.img`
    width: 100px;
    height: 50px;
`
const Header = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid red;
`
const HeadContent = styled.div`
    margin: 0 auto;
    border: 1px solid yellow;
    height: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const items = [
    {
      label: '首页',
      key: 'Home',
    //   icon: <MailOutlined />,
    },
    {
      label: '热点',
      key: 'IndividualCenter',
    //   icon: <AppstoreOutlined />,
    },
    {
        label: '聊天摸鱼',
        key: 'Chat',
      //   icon: <MailOutlined />,
    },
    {
        label: '登录',
        key: 'login',
      //   icon: <MailOutlined />,
    },
  ];
  
function Headers(props) {
    useEffect(()=> {
      props.toggleTap('Home')
    }, [])
    const toggleTap = ({key}) => {
      props.toggleTap(key)
      console.log(key);
    }
    return (
        <Header>
            <HeadContent>
                <Img src='https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342'></Img>
                <div className='head-right'>
                    <Menu defaultSelectedKeys={['Home']} onClick={toggleTap} items={items} mode="horizontal"></Menu>
                    <Login></Login>
                </div>
            </HeadContent>
        </Header>
    )
}

function Login() {

}

export default Headers;