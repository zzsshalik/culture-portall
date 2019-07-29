import React from 'react'

import style from './AuthorShortData.module.scss';

class AuthorShortData extends React.Component {
    render() {
        return(
            <>
            <p>AuthorShortData</p>
            <p>{this.props.name}</p>
            <p>{this.props.born}</p>
            <p>{this.props.dead}</p>
            <p>{this.props.activity}</p>
            <p>_________________</p>
            </>
        )
    }
}
  
export default AuthorShortData