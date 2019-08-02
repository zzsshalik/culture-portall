import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"

import AuthorShortData from "../components/authorPageComponents/AuthorShortData/AuthorShortData"
import BiographyTimeline from "../components/authorPageComponents/BiographyTimeline/BiographyTimeline"
import Gallery from "../components/authorPageComponents/Gallery/Gallery"
import ListOfArts from "../components/authorPageComponents/ListOfArts/ListOfArts"
import MyMapComponent from "../components/authorPageComponents/Map/Map"
import VideoOverlay from "../components/authorPageComponents/VideoOverlay/VideoOverlay"
import Container from '../components/layoutComponents/container/container'

const DirectorPage = props => {
  const patternRoute = props.data.contentfulPerson

  return (
    <Layout>
      <Head title={patternRoute.name}/>
      <Container>
        <AuthorShortData
        header={patternRoute.name}
        photo={patternRoute.photo.file.url}
        city={patternRoute.birthCity[0].city}
        country={patternRoute.birthCity[0].country}
        born={patternRoute.born}
        dead={patternRoute.dead}
        activity={patternRoute.activity.activity}
        />
        <BiographyTimeline timelineObjects={patternRoute.biographyTimeline} />

        <ListOfArts artsArrayOfObject={patternRoute.artistWorks} />
        <MyMapComponent
          width={"86vw"}
          height={"30vw"}
          mapState={{
            center: [Number.parseInt(patternRoute.placesAtivity[0].Latitude),Number.parseInt(patternRoute.placesAtivity[0].Longitude)],
            zoom: 10,
          }}
          markGeometry={patternRoute.placesAtivity}
        />
        <VideoOverlay videoId={patternRoute.youtubeVideoId} />
        <Gallery photosArrayOfObjects={patternRoute.photoArts} />
      </Container>
    </Layout>
  )
}

export default DirectorPage

export const query = graphql`
query($slug: String!,$node_locale: String!) {
  contentfulPerson(slug: { eq: $slug },node_locale: { eq: $node_locale }) {
      slug
      name
      born
      dead
      photo {
        file {
          url
        }
      }
      activity {
        activity
      }
      biographyTimeline {
        time
        event
      }
      artistWorks {
        time
        art
      }
      photoArts {
        title
        description
        file {
          url
        }
      }
      youtubeVideoId
      placesAtivity {
        place
        Latitude
        Longitude
        center
        markGeometry
        internal {
          content
        }
      }
      birthPlace {
        lat
      }
      birthCity {
        city
        country
      }
    }
  }
`
