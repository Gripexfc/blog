

import React from 'react'
import styled from 'styled-components'
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
    width: 100%;
`
function Body() {
    return (
        <BodyStyle>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
        </BodyStyle>
    )
}

function Article(){
    return (
        <ArticleList>
            <div className='article-left'>
                <div className='article-head'></div>
                <div className='article-title'></div>
                <div className='article-content'></div>
                <div className='article-view'></div>
            </div>
            <div className='article-right'>
                <img></img>
            </div>
        </ArticleList>
    )
}

export default Body;