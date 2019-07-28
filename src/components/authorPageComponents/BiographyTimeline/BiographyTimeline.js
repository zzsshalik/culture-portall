import React from 'react'

import style from './BiographyTimeline.module.scss';

class BiographyTimeline extends React.Component {
    render() {
        return(
            <>
            {/* this.props.timelineObjects - this is an array of objects! */}
            <p>{this.props.timelineObjects[0].internal.content}....@Biography timeline</p>
            </>
        )
    }
}
  
export default BiographyTimeline