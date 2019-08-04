import React from 'react'
import PropTypes from 'prop-types'
import GalleryImage from 'react-grid-gallery'
import galleryStyles from './Gallery.module.scss'

const Gallery = (props) => {
  const imagesArray = [];
  const { photosArrayOfObjects } = props
  return(
    <React.Fragment>
      <h3 id="AGallery" className={galleryStyles.gallery_title}>Gallery</h3>

      {photosArrayOfObjects.map((edge) => {
              const imageInfo = {};
              const delimiter = edge.description.search('x');
              const sizeLength = edge.description.length;

              imageInfo.src = edge.file.url;
              imageInfo.thumbnail = edge.file.url;
              imageInfo.thumbnailWidth = Number(edge.description.substring(0,delimiter));
              imageInfo.thumbnailHeight = Number(edge.description.substring(delimiter + 1,sizeLength));
              imagesArray.push(imageInfo);
          })}

      <GalleryImage images={imagesArray} />
    </React.Fragment>
  )
}

Gallery.propTypes = {
  photosArrayOfObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Gallery
