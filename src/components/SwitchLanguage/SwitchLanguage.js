import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

class SwitchLanguage extends React.Component {
  static propTypes = {
    changeLanguage: PropTypes.func.isRequired,
  }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e) {
        const {changeLanguage} = this.props
        changeLanguage(e.target.id)
    }

    render() {
      return (
        <ButtonGroup aria-label="Change language" size="sm">
          <Button variant="secondary" onClick={this.handleClick} id='ru'>ru</Button>
          <Button variant="secondary" onClick={this.handleClick} id='by'>by</Button>
          <Button variant="secondary" onClick={this.handleClick} id='en-US'>en</Button>
        </ButtonGroup>
      )
    }
}
export default SwitchLanguage
