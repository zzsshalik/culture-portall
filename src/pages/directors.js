import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import DirectorCards from '../components/directorsCards/directorsCards'
import Container from '../components/layoutComponents/container/container'

const DirectorPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPerson {
            edges {
                node {
                   name
                   node_locale
                   slug
                   photo{
                    file{
                      url
                    }
                  }
                }
            }
        }
    }
    `)

    return (
        <Layout>
            <Head title="Directors"/>
            <Container>
              <h1>Theatre directors page</h1>
            <p>There should be a search string and suggested search results </p>
            <DirectorCards data={data} />
            </Container>
        </Layout>
    )
}

export default DirectorPage
