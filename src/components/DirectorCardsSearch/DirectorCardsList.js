import React from "react"
import { Link } from "gatsby"

import SearchPlugin from "./SearchPlugin"
import directorsStyles from "./directors.module.scss"

import loacalization from '../../localization/localization'

class DirectorCardsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: this.props.data.allContentfulPerson.edges.sort((a, b) => {
        const nameA = a.node.name
        const nameB = b.node.name
        return (nameA < nameB) ? -1: 1;
      }) }

    this.state = { items: this.props.data.allContentfulPerson.edges.filter((item) => {
      if(item.node.node_locale!== props.language) return false
      return true
    }) }

    this.updateFilterList = this.updateFilterListHandler.bind(this)
  }

  updateFilterListHandler(filteredList) {
    this.setState({ items: filteredList })
  }

  render() {
    const { props }=this;
    return (
      <>
        <h1>{loacalization[props.language].theatreDirectors}</h1>
        <h2>{props.data.title}</h2>
        <SearchPlugin items={props.data.allContentfulPerson.edges} updateList={this.updateFilterList} language={props.language} />
        <ol className={directorsStyles.posts}>
          {this.state.items.map(item => {
            return (
              <li
                className={directorsStyles.post}
                key={item.node.name + item.node.node_locale}
                id={item.node.name + item.node.node_locale}
              >
                <Link to={`/directors/${item.node.node_locale}/${item.node.slug}`}>
                  <img src={item.node.photo.file.url} alt={item.node.name} />
                  <span>
                    <h2>{item.node.name}</h2>
                    <p>
                      {item.node.birthCity[0].city},{" "}
                      {item.node.birthCity[0].country}
                    </p>
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </>
    )
  }
}

export default DirectorCardsList
