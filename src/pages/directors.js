import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import Container from '../components/layoutComponents/container/container'
import DirectorCardsList from "../components/DirectorCardsSearch/DirectorCardsList"

const DirectorPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPerson {
            edges {
                node {
                   name
                   node_locale
                   slug
                   birthCity {
                     city
                     country
                   }
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
        <Head title="Directors" />
        <Container>
          <h1>Theatre directors page</h1>
          <DirectorCardsList data={data} />
        </Container>
      </Layout>
    )
}

export default DirectorPage
