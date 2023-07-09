
import React from 'react'
import Headers from './Headers'
import Body from './Body'
import Footer from './Footer' 
import styled from 'styled-components'

const Layout = styled.div`
    max-width: 1200px;
    border: 1px solid red;
    margin: 0 auto;
`
function Home() {
    return (
        <div>
            <Headers></Headers>
            <Layout>
                <Body></Body>
            </Layout>
            <Footer></Footer>
        </div>
    )
}

export default Home;