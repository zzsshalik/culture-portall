import React from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'

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

const Layout = ({ children }) => {
     return (
       <div className={layoutStyles.container}>
         <div className={layoutStyles.content}>
           <ConnectedHeader />
           {children}
         </div>
         <ConnectedFooter />
       </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
