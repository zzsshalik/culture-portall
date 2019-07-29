import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layoutComponents/layout/layout"
import Head from "../components/pageTitle/head"

import AuthorShortData from '../components/authorPageComponents/AuthorShortData/AuthorShortData'
import BiographyTimeline from '../components/authorPageComponents/BiographyTimeline/BiographyTimeline'
import Galerry from '../components/authorPageComponents/Gallery/Gallery'
import ListOfArts from '../components/authorPageComponents/ListOfArts/ListOfArts'
import Map from '../components/authorPageComponents/Map/Map'
import VideoOverlay from '../components/authorPageComponents/VideoOverlay/VideoOverlay'

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
      internal{
        content
      }
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

const DirectorPage = props => {
  const patternRoute=props.data.contentfulPerson;

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
      <Map 
      arrayOfPlacesObjects={patternRoute.placesAtivity}
      />
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
