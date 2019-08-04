import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { connect } from "react-redux"

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import Container from '../components/layoutComponents/container/container'
import DirectorCardsList from "../components/DirectorCardsSearch/DirectorCardsList"


const mapStateToProps = ({ language }) => {
  return { language }
}
const ConnectedDirectorCardsList = connect(
  mapStateToProps
)(DirectorCardsList)

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
          <ConnectedDirectorCardsList data={data} />
        </Container>
      </Layout>
    )
}

export default DirectorPage
