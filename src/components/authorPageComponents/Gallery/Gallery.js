import React from 'react'

import style from './Gallery.module.scss';

class Gallery extends React.Component {
    render() {
        return(
            <>
            {/* this.props.photosArrayOfObjects - this is an array of objects! */}
            <p>{this.props.photosArrayOfObjects[0].file.url}....$Gallery</p>
            </>
        )
    }
}
  
export default Gallery