import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StoreProvider } from "../store/useStore";

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import DevCards from '../components/developersCards/developersCards'
import Container from '../components/layoutComponents/container/container'
import AuthorOfDay  from '../components/authorOfDay/authorOfDay'

import MainPageText from '../components/mainPageText/mainPageText'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulDevelopersInfo(filter:{node_locale: { eq: "en-US"}}) {
            edges {
                node {
                    name
                    linkToGithub
                    githubNickname
                    avatar{
                        file{
                            url
                        }
                    }
                }
            }
        }
        allContentfulPerson(filter:{node_locale: { eq: "en-US"}}) {
            edges{
                node{
                    slug
                    name
                    photo{
                        file{
                            url
                        }
                    }
                    activity{
                        activity
                    }
                }
            }
        }
    }
    `)

    return (
      <StoreProvider>
        <Layout>
          <Head title="Home" />
          <Container>
            <MainPageText />
            <AuthorOfDay data={data} />
            <DevCards data={data} />
          </Container>
        </Layout>
      </StoreProvider>
    )
}

export default IndexPage
