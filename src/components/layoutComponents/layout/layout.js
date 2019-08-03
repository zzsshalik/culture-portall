import React, { Fragment, useCallback } from "react";
import { useStore } from "../../../store/useStore";

import Header from '../header/header'
import Footer from '../footer/footer'
import '../../../styles/index.scss'
import layoutStyles from './layout.module.scss'

import localization from '../../../localization/localization'

const Layout = props => {
  const { state, dispatch } = useStore();

  const changeLanguage = useCallback((newLng) => dispatch({ type: newLng }), [
    dispatch
  ]);

     return (
       <div className={layoutStyles.container}>
         <div className={layoutStyles.content}>
           <Header changeLanguage={changeLanguage} localization={localization[state.language]} />
           {props.children}
         </div>
         <Footer localization={localization[state.language]} />
       </div>
    )
}

export default Layout
