import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import Container from '../components/layoutComponents/container/container'

const DevelopersPage = () => {
    return (
        <Layout>
            <Head title="Developers"/>
            <Container>
              <h1>Developers page</h1>
            </Container>
        </Layout>
    )
}

export default DevelopersPage
