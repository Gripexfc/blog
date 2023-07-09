
import React, {useState} from 'react'
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
      key: 'mail',
    //   icon: <MailOutlined />,
    },
    {
      label: '个人中心',
      key: 'app',
    //   icon: <AppstoreOutlined />,
    },
    {
        label: '聊天摸鱼',
        key: 'mail',
      //   icon: <MailOutlined />,
    },
    {
        label: '登录',
        key: 'mail',
      //   icon: <MailOutlined />,
    },
  ];
  
function Headers() {
    const [current, setCurrent] = useState('mail');
    return (
        <Header>
            <HeadContent>
                <Img src={require('../../../static/bg.jpg').default}></Img>
                <div className='head-right'>
                    <Menu items={items} mode="horizontal"></Menu>
                    <Login></Login>
                </div>
            </HeadContent>
        </Header>
    )
}

function Login() {

}

export default Headers;