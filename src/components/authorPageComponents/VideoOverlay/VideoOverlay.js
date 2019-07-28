import React from 'react'

import style from './VideoOverlay.module.scss';

class VideoOverlay extends React.Component {
    render() {
        return(
            <>
            <p>{this.props.videoId}....@VideoOverlay</p>
            </>
        )
    }
}
  
export default VideoOverlay