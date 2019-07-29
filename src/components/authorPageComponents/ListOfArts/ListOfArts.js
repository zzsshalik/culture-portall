import React from 'react'

import style from './ListOfArts.module.scss';

class ListOfArts extends React.Component {
    render() {
        return(
            <>
            {/* this.props.artsArrayOfObject - this is an array of objects! */}
            <p>{this.props.artsArrayOfObject[0].internal.content}....@list of arts</p>
            </>
        )
    }
}
  
export default ListOfArts