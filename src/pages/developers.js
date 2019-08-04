import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
            linkToGithub
            githubNickname
            avatar {
              file {
                url
              }
            }
            shortDescription {
              shortDescription
            }
            longDescription {
              longDescription
            }
            contributionImg {
              title
              file {
                url
              }
            }
            prList {
              link
            }
            features {
              id
              start
              end
              spent
              feature
            }
          }
        }
      }
    }
  `)

    return (
      <Layout>
        <Head title="Developers" />
        <Container>
          <h1 className="text-center mt-4">Developers: TEAM12</h1>
          <DevBigCard data={data} />
        </Container>
      </Layout>
    )
}

export default DevelopersPage
