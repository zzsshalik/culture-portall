import React from 'react'

import GalleryImage from 'react-grid-gallery';
import galleryStyles from './Gallery.module.scss';

class Gallery extends React.Component {

    render() {
        const imagesArray = [];

        return(
            <React.Fragment>
                <h3 className={galleryStyles.gallery_title}>Gallery</h3>
                {this.props.photosArrayOfObjects.map((edge) => {
                    const imageInfo = {};
                    imageInfo.src = edge.file.url;
                    imageInfo.thumbnail = edge.file.url;
                    imageInfo.thumbnailWidth = 320;
                    imageInfo.thumbnailHeight = 150;
                    imagesArray.push(imageInfo);
                })}

                <GalleryImage images={imagesArray}/>
            </React.Fragment>
        )
    }
}

export default Gallery
