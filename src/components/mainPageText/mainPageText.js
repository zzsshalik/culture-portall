import React from 'react'
import PropTypes from 'prop-types'

import localization from '../../localization/localization'

const IndexPage = ({ language }) => {
    return(
      <>
        <div className="mt-5">
          <h1 className="text-center">{localization[language].theatreDirectors}</h1>
          <p className="text-justify">
            {localization[language].mainText.p1}
          </p>
          <p className="text-justify">{localization[language].mainText.p2}</p>
          <ul>
            <li>
              {localization[language].mainText.li1}
            </li>
            <li>
              {localization[language].mainText.li2}
            </li>
            <li>
              {localization[language].mainText.li3}
            </li>
            <li>
              {localization[language].mainText.li4}
            </li>
          </ul>
          <p className="text-justify">
            {localization[language].mainText.p3}
          </p>
          <p className="text-justify">
            {localization[language].mainText.p4}
          </p>
        </div>
      </>
    )
}

IndexPage.propTypes = {
  language: PropTypes.string.isRequired,
}

export default IndexPage
