import React from 'react';
import styled from 'styled-components'
import RenderArticle from './RenderArticle'

const HomeStyle = styled.div`
    background-color: #f2f3f5;
`

const Layout = styled.div`
    max-width: 1200px;
    height: 800px;
    margin: 100px auto;
    background-color: #f2f3f5;
`
function Article() {
    return (
        <HomeStyle>
            <Layout>
                <RenderArticle></RenderArticle>
            </Layout>
            {/* <Footer></Footer> */}
        </HomeStyle>
    )
}


export default Article;