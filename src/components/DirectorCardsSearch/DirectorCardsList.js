import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import SearchPlugin from "./SearchPlugin"
import directorsStyles from "./directors.module.scss"
import localization from '../../localization/localization'

class DirectorCardsList extends React.Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.object).isRequired,
    language: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    const { data } = this.props
    this.state = { items: data.allContentfulPerson.edges
      .filter((item) => {
        if(item.node.node_locale==='ru' && props.language==='by') return true
        if(item.node.node_locale!== props.language) return false
        return true
      })
      .sort((a, b) => {
        const nameA = a.node.name
        const nameB = b.node.name
        return (nameA < nameB) ? -1: 1;
      }) }
    this.updateFilterList = this.updateFilterListHandler.bind(this)
  }

  updateFilterListHandler(filteredList) {
    this.setState({ items: filteredList })
  }
  render() {
    const { data, language } = this.props
    let state = this.state
    return (
      <>
        <h1 className="mt-5 text-center">{localization[language].theatreDirectors}</h1>
        <h2>{data.title}</h2>
        <SearchPlugin items={data.allContentfulPerson.edges} updateList={this.updateFilterList} language={language} />
        <ol className={directorsStyles.posts}>
          {state.items.map(item => {
            return (
              <li
                className={directorsStyles.post}
                key={item.node.name + item.node.node_locale}
                id={item.node.name + item.node.node_locale}
              >
                <Link to={`/directors/${item.node.node_locale}/${item.node.slug}`}>
                  <img src={item.node.photo.file.url} alt={item.node.name} />
                  <span>
                    <h2 className={directorsStyles.dirName}>{item.node.name}</h2>
                    <p>
                      {item.node.birthCity[0].city}
,
                      {" "}
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
