
import React from 'react'
import Headers from './Headers'
import Body from './Body'
import Footer from './Footer' 
import styled from 'styled-components'
import { useState } from 'react'

const Layout = styled.div`
    max-width: 1200px;
    border: 1px solid red;
    margin: 0 auto;
`
function Home() {
    const [ moduleName, setModuleName ] = useState('homePage')
    const toggleTap = (name) => {
        setModuleName(name);
        console.log(moduleName,'moduleName');
    }
    return (
        <div>
            <Headers toggleTap={toggleTap}></Headers>
            <Layout>
                <Body moduleName={moduleName}></Body>
            </Layout>
            <Footer></Footer>
        </div>
    )
}

export default Home;