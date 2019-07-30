import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"

import AuthorShortData from '../components/authorPageComponents/AuthorShortData/AuthorShortData'
import BiographyTimeline from '../components/authorPageComponents/BiographyTimeline/BiographyTimeline'
import Galerry from '../components/authorPageComponents/Gallery/Gallery'
import ListOfArts from '../components/authorPageComponents/ListOfArts/ListOfArts'
import MyMapComponent from '../components/authorPageComponents/Map/Map'
import VideoOverlay from '../components/authorPageComponents/VideoOverlay/VideoOverlay'

const DirectorPage = props => {
  const patternRoute=props.data.contentfulPerson;

  const map = {
    markGeometry: [53, 26],
    center: [53, 26],
    mapHintContent: 'GG',
    mapBalloonContent: 'EASY'
  }
  const map1 = [
    {
      markGeometry: [53, 26],
      center: [53, 26],
      mapHintContent: 'GG',
      mapBalloonContent: 'EASY'
    },
    {
      markGeometry: [54, 26],
      center: [53, 26],
      mapHintContent: 'GG',
      mapBalloonContent: 'EASY'
    }
  ]
  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ];

  return (
    <Layout>
      <Head title={patternRoute.name}/>
      <h1>{patternRoute.name}</h1>
      <AuthorShortData 
      name={patternRoute.name}
      born={patternRoute.born}
      dead={patternRoute.dead}
      activity={patternRoute.activity.activity}
      />
      <BiographyTimeline
      timelineObjects={patternRoute.biographyTimeline} />

      <ListOfArts 
      artsArrayOfObject={patternRoute.artistWorks}
      />
        <MyMapComponent
          width={'86vw'}
          height={'30vw'}
          mapState={{ center: map.center, zoom: 10 }}
          markGeometry={map1}
          mapHintContent={map.mapHintContent}
          mapBalloonContent={map.mapBalloonContent}
        />
        <p>{patternRoute.placesAtivity}</p>
      {/* <Map 
      arrayOfPlacesObjects={patternRoute.placesAtivity}
      />  */}
      <VideoOverlay 
      videoId={patternRoute.youtubeVideoId}
      />
      <Galerry 
      photosArrayOfObjects={patternRoute.photoArts}
      />
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
		photo{
      file{
        url
      }
    }
    activity{
      activity
    }
    biographyTimeline{
      time, 
      event
    }
    artistWorks{
      time,
      art
    }
    photoArts{
      title,
      file{
        url
      }
    }
    youtubeVideoId
    placesAtivity{
      internal{
        content
      }
    }
    birthPlace{
      lat
    }
  }
}
`