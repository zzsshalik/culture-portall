import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layoutComponents/layout/layout'
import Head from "../components/pageTitle/head"
import Container from '../components/layoutComponents/container/container'

const NotFound = () => {
    return (
      <Layout>
        <Head title="404" />
        <Container>
          <h1>Page not found</h1>
          <p><Link to="/">Head home</Link></p>
        </Container>
      </Layout>
    )
}

export default NotFound
