import React from 'react'
import { Link } from 'gatsby'
import directorsStyles from './directors.module.scss'

const Cards = ({ data }) => {
             return(  <ol className={directorsStyles.posts}>
                {data.allContentfulPerson.edges.map((edge) => {
                    return (
                        <li className={directorsStyles.post} key={edge.node.name+edge.node.node_locale} id={edge.node.name+edge.node.node_locale}>
                            <Link to={`/directors/en-US/${edge.node.slug}`}>
                                <img src={edge.node.photo.file.url}></img>
                                <span>
                                    <h2>{edge.node.name}</h2>
                                    <p>{edge.node.name}</p>
                                </span>

                            </Link>
                        </li>
                    )
                })}
            </ol>
             )
}            
export default Cards