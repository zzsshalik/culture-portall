import React from 'react'

import switchStyles from './switchLanguage.module.scss'

class SwitchLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }


    handleClick(e){
        this.props.changeLanguage(e.target.className)
    }
    render(){
    return (
          <span className={switchStyles.switchLanguageContainer}>
             <a className='ru' onClick={this.handleClick}>ru</a>|
             <a className='by' onClick={this.handleClick}>by</a>|
             <a className='en' onClick={this.handleClick}>en</a>
          </span>
    )
    }
}

export default SwitchLanguage
