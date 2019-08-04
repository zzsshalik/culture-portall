import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { connect } from "react-redux"

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import DevCards from '../components/developersCards/developersCards'
import Container from '../components/layoutComponents/container/container'
import AuthorOfDay  from '../components/authorOfDay/authorOfDay'
import MainPageText from '../components/mainPageText/mainPageText'

const mapStateToProps = ({ language }) => {
    return { language }
  }
  const ConnectedMainPageText = connect(
    mapStateToProps
  )(MainPageText)

  const  ConnectedAuthorOfDay = connect(
    mapStateToProps
  )(AuthorOfDay)


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
        allContentfulPerson {
            edges{
                node{
                    node_locale
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
      <Layout>
        <Head title="Home" />
        <Container>
          <ConnectedMainPageText />
          <ConnectedAuthorOfDay data={data} />
          <DevCards data={data} />
        </Container>
      </Layout>
    )

}

export default IndexPage
