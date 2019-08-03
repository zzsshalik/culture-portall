import React from 'react'

import authorStyles from './AuthorShortData.module.scss';

class AuthorShortData extends React.Component {
    render() {
      const {
          dead,
          header,
          photo,
          city,
          country,
          born,
          activity
      } = this.props
        let deadPerson;
        if (dead) {
          deadPerson = dead;
        } else {
          deadPerson = 'Alive';
        }

        return(
          <React.Fragment>
            <h1 id="AName" className={authorStyles.head}>{header}</h1>
            <div className={authorStyles.info}>
              <img className={authorStyles.photo} src={photo} alt={header} />
              <p>
                {city}
                ,
                {' '}
                {country}
              </p>
              <p>
                {born}
                {' '}
                &mdash;
                {' '}
                {deadPerson}
              </p>
              <p>{activity}</p>
            </div>
          </React.Fragment>
        )
    }
}

export default AuthorShortData
