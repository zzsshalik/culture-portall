import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"

import AuthorShortData from "../components/authorPageComponents/AuthorShortData/AuthorShortData"
import BiographyTimeline from "../components/authorPageComponents/BiographyTimeline/BiographyTimeline"
import Galerry from "../components/authorPageComponents/Gallery/Gallery"
import ListOfArts from "../components/authorPageComponents/ListOfArts/ListOfArts"
import MyMapComponent from "../components/authorPageComponents/Map/Map"
import VideoOverlay from "../components/authorPageComponents/VideoOverlay/VideoOverlay"

const DirectorPage = props => {
  const patternRoute = props.data.contentfulPerson

  const map = {
    markGeometry: [53, 26],
    center: [53, 26],
    mapHintContent: "GG",
    mapBalloonContent: "EASY",
  }
  const map1 = [
    {
      markGeometry: [53, 26],
      center: [53, 26],
      mapHintContent: "GG1",
      mapBalloonContent: "EASY1",
    },
    {
      markGeometry: [54, 26],
      center: [54, 26],
      mapHintContent: "GG2",
      mapBalloonContent: "EASY2",
    },
  ]

  return (
    <Layout>
      <Head title={patternRoute.name}/>
      <AuthorShortData
      header={patternRoute.name}
      photo={patternRoute.photo.file.url}
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
      <Galerry photosArrayOfObjects={patternRoute.photoArts} />
    </Layout>
  )
}

export default DirectorPage

export const query = graphql`
  query($slug: String!) {
    contentfulPerson(slug: { eq: $slug }) {
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
    }
  }
`
