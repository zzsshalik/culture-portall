import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Theater directors of Belarus</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam expedita cum eveniet necessitatibus quis, esse fuga ipsa minima repellendus voluptate nostrum quasi nesciunt quo, iusto tempora magni cumque fugit.</p>
        </Layout>
    )
}

export default IndexPage
