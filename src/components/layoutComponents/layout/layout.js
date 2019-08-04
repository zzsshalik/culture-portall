import React from "react";

import { connect } from "react-redux"

import Header from '../header/header'
import Footer from '../footer/footer'
import '../../../styles/index.scss'
import layoutStyles from './layout.module.scss'

const mapStateToProps = ({ language }) => {
  return { language }
}

const mapDispatchToProps = dispatch => {
  return { ru: (language) => dispatch({ type: language })}
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

const ConnectedFooter = connect(
  mapStateToProps
)(Footer)

class Layout extends React.Component {
  render(){
     return (
       <div className={layoutStyles.container}>
         <div className={layoutStyles.content}>
           <ConnectedHeader />
           {this.props.children}
         </div>
         <ConnectedFooter />
       </div>
    )
}
}

export default Layout
