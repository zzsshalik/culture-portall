import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Apns from './apNav.module.scss'

const ApNav = () => {
        return(
          <div className={Apns.navi}>
            <AnchorLink className={Apns.link} href='#AName'>Name</AnchorLink>
            <AnchorLink className={Apns.link} href='#ATimeline'>Timeline</AnchorLink>
            <AnchorLink className={Apns.link} href='#Repertoire'>Repertoire</AnchorLink>
            <AnchorLink offset={() => 140} className={Apns.link} href='#AMap'>Map</AnchorLink>
            <AnchorLink className={Apns.link} href='#AGallery'>Gallery</AnchorLink>
          </div>
        )
}

export default ApNav
