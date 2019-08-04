import React from 'react'
import PropTypes from 'prop-types'

import authorStyles from './AuthorShortData.module.scss'

const AuthorShortData = (props) => {
      const {
          dead,
          header,
          photo,
          city,
          country,
          born,
          activity
      } = props
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

AuthorShortData.propTypes = {
  dead: PropTypes.string,
  header: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  born: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
}

AuthorShortData.defaultProps = {
  dead: 'Alive'
}
export default AuthorShortData
