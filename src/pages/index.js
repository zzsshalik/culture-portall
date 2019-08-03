import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"
import DevCards from '../components/developersCards/developersCards'
import Container from '../components/layoutComponents/container/container'
import AuthorOfDay  from '../components/authorOfDay/authorOfDay'

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
      <Layout>
        <Head title="Home" />
        <Container>
          <div className="mt-5">
            <h1 className="text-center">Theatre directors of Belarus</h1>

            <p className="text-justify">
          Belarusian theatre history extends back over many centuries. Belarusian professional
          theatre evolved from ancient folk rituals, performances of wandering musicians, court
          troupes of the Belarusian magnates and activities of amateur groups abroad in the 19–20th
           centuries.
            </p>

            <p className="text-justify">Today the country boasts a diverse range of theatre and drama:</p>
            <ul>
              <li>
            puppet theatres can be found in most towns, and are hugely popular with children and
             adults alike;
              </li>
              <li>
            professional theatre companies are active across Belarus, many of them dating back to
             the early 20th century;

              </li>
              <li>opera – every major town has its own opera house;</li>
              <li>
            ballet has been very popular in Belarus since the 18th century, and most towns
             have their own ballet; the National Academic Bolshoi Theatre of Ballet of
             the Republic of Belarus has an excellent reputation.

              </li>
            </ul>

            <p className="text-justify">
          In Belarus there are 28 professional theatres: 19 Drama and Music,
           8 children's and young audience,
          1 Opera and Ballet theatre. The year of 2016 saw almost
           1.7 million of theatre attendances.
            </p>

            <p className="text-justify">
          This cultural portal is devoted to the most significant personalities of Belarusian
           theatre history – famous directors, organizers of theatrical affairs, actors.
            Here you can find information about their life events, work activity, achievements
          and take a look at their photos.
            </p>
          </div>


          <AuthorOfDay data={data} />
          <DevCards data={data} />
        </Container>
      </Layout>
    )
}

export default IndexPage
