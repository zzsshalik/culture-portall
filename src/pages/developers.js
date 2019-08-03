import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StoreProvider } from "../store/useStore";

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import Container from '../components/layoutComponents/container/container'
import DevBigCard from '../components/developersBigCards/developersBigCards'

const DevelopersPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulDevelopersInfo(filter:{node_locale: { eq: "en-US"}}) {
            edges {
                node {
                    name
                    avatar{
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
      <StoreProvider>
        <Layout>
          <Head title="Developers" />
          <Container>
            <h1>Developers: TEAM12</h1>
            <DevBigCard data={data} />
          </Container>
        </Layout>
      </ StoreProvider>
    )
}

export default DevelopersPage
