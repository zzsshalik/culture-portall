import React from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'
import '../../../styles/index.scss'
import layoutStyles from './layout.module.scss'

import localization from '../../../localization/localization'

let lang ='en-US';

class Layout extends React.Component {
  constructor(props) {
    super(props);
     this.changeLanguage = this.changeLanguage.bind(this);
     this.state = {language: lang}
  }

   changeLanguage(cahgedLang){
     this.setState({language: cahgedLang})
     lang=cahgedLang;
  }

  render(){
     return (
       <div className={layoutStyles.container}>
         <div className={layoutStyles.content}>
           <Header changeLanguage={this.changeLanguage} localization={localization[this.state.language]} />
           {this.props.children}
         </div>
         <Footer localization={localization[this.state.language]} />
       </div>
    )
}
}

export default Layout
