

import React, { useState, useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Chat from '../views/chat/chat'

const BodyStyle = styled.div`
    /* min-height: 800px; */
    margin: 0 10px;
    background-color: #ffffff;
    .body-content {
        display: none !important;
    }
`

const ArticleList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 20px 0;
    border-bottom: 1px solid #e4e6eb;
    box-sizing: border-box;
    :hover {
        background-color: #f7f8fa;
    }
    cursor: pointer;
    .article-left {
        width: 80%;
        display: flex;
        flex-direction: column;
        .article-head {
            margin-bottom: 8px;
            span {
                margin-right: 12px;
                font-size: 13px;
                color: #8a919f;
            }
        }
        .article-title {
            margin-bottom: 8px;
            font-weight: 600;
            font-size: 16px;
            color: #252933;
            line-height: 24px;
        }
        .article-content {
            margin-bottom: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #8a919f;
            font-size: 13px;
        }
        .article-view {
            margin-bottom: 8px;
            color: #8a919f;
            font-size: 13px;
        }
    }
    .article-right {
        width: 120px;
        height: 80px;
        img {
            width: 100%;
        }
    }
`
function Body(props) {
    return (
        <BodyStyle>
            <Home className={props.moduleName}></Home>
            <Home className={props.moduleName}></Home>
            <Home className={props.moduleName}></Home>
            <Home className={props.moduleName}></Home>
            <Home className={props.moduleName}></Home>
            <Home className={props.moduleName}></Home>
            <Discuss className={props.moduleName}></Discuss>
            <ChatView className={props.moduleName}></ChatView>
        </BodyStyle>
    )
}

//首页
function Home(props){
    const navigate = useNavigate()
    const article = (item) => {
        navigate('/individualCenter')
    }
    return (
        <ArticleList onClick={article} className={'body-content' + (props.className === 'Home' ? 'active' : '')} >
            <div className='article-left'>
                <div className='article-head'>
                    <span>朝阳</span>
                    <span>一天前</span>
                    <span>前端</span>
                </div>
                <div className='article-title'>在Vue项目里使用ECharts图标库</div>
                <div className='article-content'>ECharts是一个JavaScript实现的开源图标库，能兼容绝大多数浏览器（IE8+），底层依赖ZRender（一个轻量级的Canvas类库），能高度个性化定制数据可视化图标。</div>
                <div className='article-view'>点赞*评论*浏览量</div>
            </div>
            <div className='article-right'>
                <img src='https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342'></img>
            </div>
        </ArticleList>
    )
}
//讨论区
function Discuss(props) {
    return (
        <div v-html="撒旦撒旦<u>******</u>撒旦撒旦## 大撒大撒**> ****

        大苏打撒旦啊倒萨
        ###### 实打实打算
        ~~撒大苏打~~
        *撒旦撒旦*
        <sub>撒大苏打</sub>
        <sup>啊实打实大苏打的期望</sup>
        - [ ] 撒旦撒大苏打是
        - [ ] 撒旦阿达as撒旦
        - [ ] asd a的
        - [ ] [撒大苏打](阿松大啊-------)" className={'body-content' + (props.className === 'Discuss' ? 'active' : '')}>2</div>
    )
} 
// 聊天页
function ChatView(props) {
    return (
        <div className={'body-content' + (props.className === 'Chat' ? 'active' : '')}>
            <Chat></Chat>
        </div>
    )
}

export default Body;