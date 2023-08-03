
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Menu } from 'antd'

const items = [
    {
      label: '首页',
      key: 'Home',
    //   icon: <MailOutlined />,
    },
    {
      label: '讨论区',
      key: 'Discuss',
    //   icon: <AppstoreOutlined />,
    },
    {
        label: '休闲聊天',
        key: 'Chat',
      //   icon: <MailOutlined />,
    },
  //   {
  //     label: '个人中心',
  //     key: 'IndividualCenter',
  //   //   icon: <MailOutlined />,
  // } ,
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
                <div className='head-left'>
                  <Img src='https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342'></Img>
                  <Menu defaultSelectedKeys={['Home']} onClick={toggleTap} items={items} mode="horizontal"></Menu>
                </div>
                <div className='head-right'>
                    <Login></Login>
                </div>
            </HeadContent>
        </Header>
    )
}

function Login() {
  const navigate = useNavigate()
  const loginClick = () => {
    navigate('/login')
  }
  const logionOutClick = () => {
    navigate('/login')
  }
  const personalCenterClick = () => {
    navigate('/personalCenter')
  }
  return (
    <LoginStyle>
      <div className='login-button' onClick={loginClick}>登录</div>
      <div className='login-line'></div>
      <div className='login-inner-button' onClick={loginClick}>注册</div>
      <div className='avatar-wrapper' onClick={personalCenterClick}>
        <Img src="https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342"></Img>
      </div>
    </LoginStyle>
  )
}

const Img = styled.img`
    width: 100px;
    height: 50px;
`
const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    position: fixed;
    top:0;
`
const HeadContent = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head-left {
      display: flex;
      justify-content: space-between;
    }
    .head-right {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
`

const LoginStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #b3d5ff;
  color: #007fff;
  margin-right: 60px;
  cursor: pointer;
  .login-line {
    background-color: #b3d5ff;
    height: 8px;
    width: 1px;
    margin: 0 6px;
  }
  .login-button {

  }

  .login-inner-button {

  }
  .avatar-wrapper {
    border-radius: 100%;
    margin-left: 10px;
    Img {
      width: 50px;
      border-radius: 100%;
    }
  }
`

export default Headers;