import React from "react"
import directorsStyles from "./directors.module.scss"

class SearchPlugin extends React.Component {
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
    let filteredList = this.props.items.filter(item => {
      let directorNameCity =
        item.node.name.toLowerCase() +
        item.node.birthCity[0].city.toLowerCase() +
        item.node.birthCity[0].country.toLowerCase()
      return directorNameCity.search(searchString.toLowerCase()) !== -1
    })

    this.props.updateList(filteredList)
  }

  render() {
    return (
      <input
        className={directorsStyles.search}
        placeholder="Search"
        onChange={this.onTextChanged}
      />
    )
  }
}

export default SearchPlugin
