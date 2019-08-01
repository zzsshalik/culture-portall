import React from 'react'
import { Link } from 'gatsby'
import directorsStyles from './directors.module.scss'

const Cards = ({ data }) => {
             return(  <ol className={directorsStyles.posts}>
                {data.allContentfulPerson.edges.sort((a, b) => {
                    const nameA = a.node.name;
                    const nameB = b.node.name;
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }).map((edge) => {
                    return (
                        <li className={directorsStyles.post} key={edge.node.name+edge.node.node_locale} id={edge.node.name+edge.node.node_locale}>
                            <Link to={`/directors/${edge.node.slug}`}>
                                <img src={edge.node.photo.file.url} alt={edge.node.name}></img>
                                <span>
                                    <h2>{edge.node.name}</h2>
                                    <p>{edge.node.birthCity[0].city}, {edge.node.birthCity[0].country}</p>
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ol>
             )
}            
export default Cards