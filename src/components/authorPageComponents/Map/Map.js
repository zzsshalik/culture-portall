import React from 'react'

import style from './Map.module.scss';

class Map extends React.Component {
    render() {
        return(
            <>
            {/* this.props.arrayOfPlacesObjects - this is an array of objects! */}
            <p>{this.props.arrayOfPlacesObjects[0].internal.content}....@Map</p>
            </>
        )
    }
}
  
export default Map