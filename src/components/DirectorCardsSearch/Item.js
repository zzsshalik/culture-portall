import React from 'react'
import { Link } from "gatsby"
import directorsStyles from "./directors.module.scss"

class Item extends React.Component {
    render() {
      return (
       /*  <li className={directorsStyles.post}>{this.props.name}</li> */
        {/* <li
              className={directorsStyles.post}
              key={edge.node.name + edge.node.node_locale}
              id={edge.node.name + edge.node.node_locale}
            >
              <Link to={`/directors/${edge.node.slug}`}>
                <img src={edge.node.photo.file.url} alt={edge.node.name} />
                <span>
                  <h2>{edge.node.name}</h2>
                  <p>
                    {edge.node.birthCity[0].city},{" "}
                    {edge.node.birthCity[0].country}
                  </p>
                </span>
              </Link>
            </li> */}
      );
    }
  }

  
export default Item