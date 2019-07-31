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
                    const delimiter = edge.description.search('x'); 
                    const sizeLength = edge.description.length;

                    imageInfo.src = edge.file.url;
                    imageInfo.thumbnail = edge.file.url;
                    imageInfo.thumbnailWidth = Number(edge.description.substring(0,delimiter));
                    imageInfo.thumbnailHeight = Number(edge.description.substring(delimiter + 1,sizeLength));
                    imagesArray.push(imageInfo);
                })}

                <GalleryImage images={imagesArray}/>
            </React.Fragment>
        )
    }
}

export default Gallery
