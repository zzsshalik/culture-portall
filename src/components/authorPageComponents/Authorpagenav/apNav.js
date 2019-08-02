import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Apns from './apNav.module.scss';


class ApNav extends React.Component {
    render(){
        return(
            <div className={Apns.navi}>
                <AnchorLink className={Apns.link} href='#AName'>Name</AnchorLink>
                <AnchorLink className={Apns.link} href='#ATimeline'>Timeline</AnchorLink>
                <AnchorLink className={Apns.link} href='#Repertoire'>Repertoire</AnchorLink>
                <AnchorLink className={Apns.link} href='#AMap'>Map</AnchorLink>
                <AnchorLink className={Apns.link} href='#AGallery'>Gallery</AnchorLink>
            </div>
        )
    }
}
 
export default ApNav
