import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Apns from './apNav.module.scss';


class ApNav extends React.Component {
    render(){
        return(
            <div className={Apns.navi}>
                <AnchorLink className={Apns.link} href='#things'>Things</AnchorLink>
                <AnchorLink className={Apns.link} href='#stuff'>Stuff</AnchorLink>
            </div>
        )
    }
}
 
export default ApNav

/*class apNav extends React.Component {
    render() {
        let menus = [
            "navbar",
            "timeline--wrapper",
        ]

        return(
            <React.Fragment>
            <div>{menus.map((value, index) => {
                return <div key={index}><Link label={value} /></div>
            })
            }</div>
            </React.Fragment>
        )
    }
}

class Link extends React.Component {
    const url =
}




*/