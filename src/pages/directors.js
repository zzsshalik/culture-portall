import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import DirectorCards from '../components/directorsCards/directorsCards'
import Container from '../components/layoutComponents/container/container'
/* import { ItemsList } from "../components/DirectorCardsSearch/directorCardsSearch" */
import ItemsList from "../components/DirectorCardsSearch/ItemsList"

const DirectorPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPerson(filter:{node_locale: { eq: "en-US"}}) {
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

    const propsValues = {
      items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Hawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
      ]
    };

    return (
        <Layout>
            <Head title="Directors"/>
            <Container>
              <h1>Theatre directors page</h1>
            <ItemsList data={data}/>
           {/*  <DirectorCards data={data} /> */}
            </Container>
        </Layout>
    )
}

export default DirectorPage
