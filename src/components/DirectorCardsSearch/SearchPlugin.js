import React from "react"
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

class SearchPlugin extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateList: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.onTextChanged = this.onTextChangedHandler.bind(this)
    this.search = this.searchHandler.bind(this)
  }

  onTextChangedHandler(e) {
    let searchString = e.target.value.trim()
    this.search(searchString)
  }

  searchHandler(searchString) {
    const { items, updateList } = this.props
    let filteredList = items.filter(item => {
      const { language } = this.props
      let directorNameCity =
        item.node.name.toLowerCase() +
        item.node.birthCity[0].city.toLowerCase() +
        item.node.birthCity[0].country.toLowerCase()
        if(language==='by' && item.node.node_locale==='ru') {return directorNameCity.search(searchString.toLowerCase()) !== -1}
        if(item.node.node_locale !== language) {return false}
      return directorNameCity.search(searchString.toLowerCase()) !== -1
    })

    updateList(filteredList)
  }

  render() {
    return (
      <Form className="mx-5 my-5">
        <Form.Control
          placeholder="Search"
          onChange={this.onTextChanged}
        />
      </Form>

    )
  }
}

export default SearchPlugin
