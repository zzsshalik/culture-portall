import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import directorsStyles from './directors.module.scss'
import Head from "../components/head"

const DirectorPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPerson  {
            edges {
                node {
                   name
                   slug
                  birthPlace{
                    lon
                  }
                }
            }
        }
    }
    `)

    return (
        <Layout>
            <Head title="Directors"/>
            <h1>Theatre directors page</h1>
            <p>There should be a search string and suggested search results </p>
            <ol className={directorsStyles.posts}>
                {data.allContentfulPerson.edges.map((edge) => {
                    return (
                        <li className={directorsStyles.post}>
                            <Link to={`/directors/${edge.node.slug}`}>
                                <h2>{edge.node.name}</h2>
                                <p>{edge.node.name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default DirectorPage