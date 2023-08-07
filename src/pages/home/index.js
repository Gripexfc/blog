
import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer' 
import styled from 'styled-components'
import { useState } from 'react'

const HomeStyle = styled.div`
    background-color: #f2f3f5;
`

const Layout = styled.div`
    max-width: 1200px;
    margin: 70px auto;
    background-color: #f2f3f5;
`
function Home() {
    const [ moduleName, setModuleName ] = useState('homePage')
    const toggleTap = (name) => {
        setModuleName(name);
        console.log(moduleName,'moduleName');
    }
    return (
        <HomeStyle>
            <Header toggleTap={toggleTap}></Header>
            <Layout>
                <Body moduleName={moduleName}></Body>
            </Layout>
            {/* <Footer></Footer> */}
        </HomeStyle>
    )
}

export default Home;