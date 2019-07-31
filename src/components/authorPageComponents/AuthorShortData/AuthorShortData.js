import React from 'react'

import authorStyles from './AuthorShortData.module.scss';

class AuthorShortData extends React.Component {
    render() {
        let dead;
        if (this.props.dead) {
            dead = this.props.dead;
        } else {
            dead = 'Alive';
        }

        return(
            <React.Fragment>
            <h1 className={authorStyles.head}>{this.props.header}</h1>
            <div className={authorStyles.info}>
                <img className={authorStyles.photo} src={this.props.photo}/>
                <p>{this.props.city}, {this.props.country}</p>
                <p>{this.props.born} - {dead}</p>
                <p>{this.props.activity}</p>
                <div className={authorStyles.divideLine}></div>
            </div>
            </React.Fragment>
        )
    }
}
  
export default AuthorShortData