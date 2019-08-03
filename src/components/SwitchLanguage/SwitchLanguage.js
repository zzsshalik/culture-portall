import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';

class SwitchLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e){
        this.props.changeLanguage(e.target.id)
    }

    render(){
    return (
      <ButtonGroup aria-label="Change language" size="sm">
        <Button variant="secondary" onClick={this.handleClick} id='ru'>ru</Button>
        <Button variant="secondary" onClick={this.handleClick} id='by'>by</Button>
        <Button variant="secondary" onClick={this.handleClick} id='en-US'>en</Button>
      </ButtonGroup>
    )
    }
}

{/* <span className={switchStyles.switchLanguageContainer}>
        <a className='ru' onClick={this.handleClick}>ru</a>
        <a className='by' onClick={this.handleClick}>by</a>
        <a className='en-US' onClick={this.handleClick}>en</a>
      </span> */}
export default SwitchLanguage
