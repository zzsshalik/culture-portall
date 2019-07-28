import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
query($slug: String!) {
  contentfulPerson(slug: { eq: $slug }) {
         name
         slug	
         birthPlace{
            lon
         }
  }
}
`

const DirectorPage = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulPerson.name}/>
      <h1>{props.data.contentfulPerson.name}</h1>
      <p>{props.data.contentfulPerson.name}</p>
      {documentToReactComponents(props.data.contentfulPerson.body.json, options)}
    </Layout>
  )
}

export default DirectorPage
