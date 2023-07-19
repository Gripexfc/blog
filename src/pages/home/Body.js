

import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Chat from '../views/chat/chat'
import './body.css'
const BodyStyle = styled.div`
    border: 1px solid green;
    min-height: 800px;
    padding-left: 100px;
    padding-right: 100px;
`

const ArticleList = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    .article-left {
        width: 80%;
        .article-head {
            span {
                margin-right: 12px;
                font-size: 13px;
                color: #8a919f;
            }
        }
        .article-title {

        }
        .article-content {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .article-view {

        }
    }
`
function Body(props) {
    console.log(props.moduleName,'props.moduleName');
    return (
        <BodyStyle>
            <Home className={props.moduleName}></Home>
            <IndividualCenter className={props.moduleName}></IndividualCenter>
            <ChatView className={props.moduleName}></ChatView>
        </BodyStyle>
    )
}

//首页
function Home(props){
    return (
        <ArticleList className={'body-content' + (props.className === 'Home' ? 'active' : '')}>
            <div className='article-left'>
                <div className='article-head'>
                    <span>朝阳</span>
                    <span>一天前</span>
                    <span>前端</span>
                </div>
                <div className='article-title'>在Vue项目里使用ECharts图标库</div>
                <div className='article-content'>ECharts是一个JavaScript实现的开源图标库，能兼容绝大多数浏览器（IE8+），底层依赖ZRender（一个轻量级的Canvas类库），能高度个性化定制数据可视化图标。</div>
                <div className='article-view'>点赞呀</div>
            </div>
            <div className='article-right'>
                <img></img>
            </div>
        </ArticleList>
    )
}
//热点页
function IndividualCenter(props) {
    return (
        <div className={'body-content' + (props.className === 'IndividualCenter' ? 'active' : '')}>2</div>
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