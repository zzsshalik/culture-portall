import React from "react"
import SearchPlugin from "./SearchPlugin"
import { Link } from "gatsby"
import directorsStyles from "./directors.module.scss"

class DirectorCardsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: this.props.data.allContentfulPerson.edges.sort((a, b) => {
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
    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <SearchPlugin items={this.props.data.allContentfulPerson.edges} updateList={this.updateFilterList} />
        <ol className={directorsStyles.posts}>
          {this.state.items.map(item => {
            return (
              <li
                className={directorsStyles.post}
                key={item.node.name + item.node.node_locale}
                id={item.node.name + item.node.node_locale}
              >
                  <Link to={`/directors/en-US/${item.node.slug}`}>
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
      </div>
    )
  }
}

export default DirectorCardsList
