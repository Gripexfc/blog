
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Menu, Input } from 'antd'
import codelogo from '../../assets/icon/codelogo.png'

const { Search } = Input

const items = [
    {
      label: '首页',
      key: 'Home'
    },
    {
      label: '讨论区',
      key: 'Discuss'
    },
    {
      label: '休闲聊天',
      key: 'Chat'
    },
    {
      label: '活动',
      key: 'Avtive'
    },
    {
      label: '直播',
      key: 'Live'
    }
  ];

function Header(props) {
  
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
      props.toggleTap('Home')
    },[])
    // 菜单点击事件
    const toggleTap = (index, item) => {
      setActiveIndex(index)
      props.toggleTap(item.key)
    }
    // 导航栏菜单渲染
    const listItems = items.map((item, index) => 
      <li key={item.key} onClick={() => {toggleTap(index, item)}} className={activeIndex === index ? 'active' : ''}>{item.label}</li>
    )
    // 导航栏查询事件
    const onSearch = (value) => {console.log(value)}
    // 头像点击事件
    const avatarToggleTap = (key) => {
      props.toggleTap(key)
      setActiveIndex(999)
    }
    
    return (
        <Head>
            <HeadContent>
                <div className='head-left'>
                  <Img src={codelogo} onClick={() => {toggleTap(0, {key: 'Home'})}}></Img>
                  <h1 onClick={() => {toggleTap(0, {key: 'Home'})}}>BLOG</h1>
                  <ul>{listItems}</ul>
                  <Search placeholder='请输入查找内容' style={{width: 270}} onSearch={onSearch}></Search>
                </div>
                <div className='head-right'>
                    <Login avatarToggleTap={avatarToggleTap}></Login>
                </div>
            </HeadContent>
        </Head>
    )
}

function Login(props) {
  const navigate = useNavigate()
  const loginClick = () => {
    navigate('/login')
  }
  const logionOutClick = () => {
    navigate('/login')
  }
  const personalCenterClick = () => {
    props.avatarToggleTap('PersonalCenter')
    // navigate('/personalCenter')
  }
  return (
    <LoginStyle>
      <div className='loginContent'>
        <div onClick={loginClick}>注册</div>
        <div></div>
        <div onClick={logionOutClick}>登录</div>
      </div>
      <div className='avatar-wrapper'>
        <Img src="https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342" onClick={personalCenterClick}></Img>
      </div>
    </LoginStyle>
  )
}

const Img = styled.img`
    width: 100%;
    height: 100%;
`
const Head = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    position: fixed;
    top:0;
`
const HeadContent = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 1400px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head-left {
      display: flex;
      flex: 0.9;
      // justify-content: space-between;
      align-items: center;
      Img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      h1 {
        padding: 0 15px;
        font-weight: 600;
        flex: 0.1;
        font-size: 30px;
        cursor: pointer;
      }
      ul {
        display: flex;
        flex: 0.7;
        color: #515767;
        line-height: 58px;
        li {
          margin: 0 10px;
          cursor: pointer;
          border-bottom: 2px solid #fff;
          -webkit-transition: border-bottom .3s;
        }
        li:hover {
          border-bottom: 2px solid #1e80ff;
        }
        .active {
          color: #1e80ff;
        }
      }
    }
    .head-right {
      height: 100%;
      display: flex;
      flex: 0.1;
      justify-content: space-between;
      align-items: center;
    }
`
const LoginStyle = styled.div`
  // justify-content: space-between;
  display: flex;
  align-items: center;
  color: #007fff;
  width: 100%;
  cursor: pointer;
  .loginContent {
    border: 1px solid rgba(30, 128, 255, .3);
    padding: 3.6px 12px;
    border-radius: 4px;
    height: 36px;
    align-items: center;
    display: flex;
    background-color: rgba(30, 128, 255, .05);
    div {
      margin: 0 3px;
    }
    div:nth-child(2) {
      height: 19px;
      border: 1px solid #007fff;
    }
  }
  .avatar-wrapper {
    flex: 1;
    border-radius: 100%;
    width: 40px;
    Img {
      width: 36px;
      height: 36px;
      border-radius: 100%;
      margin-left: 10px;
    }
  }
`

export default Header;