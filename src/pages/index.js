import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Theatre directors of Belarus</h1>

            <p>Belarusian theatre history extends back over many centuries. Belarusian professional 
                theatre evolved from ancient folk rituals, performances of wandering musicians, court 
                troupes of the Belarusian magnates and activities of amateur groups abroad in the 19–20th centuries.
            </p>

            <p>Today the country boasts a diverse range of theatre and drama:
                <ul>
                    <li>puppet theatres can be found in most towns, and are hugely popular with children and adults alike;</li>
                    <li>professional theatre companies are active across Belarus, many of them dating back to the early 20th century;</li>
                    <li>opera – every major town has its own opera house;</li>
                    <li>ballet has been very popular in Belarus since the 18th century, and most towns have their own ballet; the National 
                        Academic Bolshoi Theatre of Ballet of the Republic of Belarus has an excellent reputation.</li>
                </ul>
            </p>

            <p> In Belarus there are 28 professional theatres: 19 Drama and Music, 8 children's and young audience,
                1 Opera and Ballet theatre. The year of 2016 saw almost 1.7 million of theatre attendances.
            </p>

            <p> This cultural portal is devoted to the most significant personalities of Belarusian theatre history – famous directors, 
                organizers of theatrical affairs, actors. Here you can find information about their life events, work activity, achievements
                and take a look at their photos.
            </p>

            <h2> Enjoy reading!</h2>

        </Layout>
    )
}

export default IndexPage
