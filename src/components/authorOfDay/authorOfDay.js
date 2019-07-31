import React from 'react'
import { Link } from 'gatsby'
import authorOfDayStyles from './authorOfDay.module.scss'


const AuthorOfDay  = ({ data }) => {
             return(  <React.Fragment>
                 <h3 className={authorOfDayStyles.head}>Person of the day</h3>

                    {data.allContentfulPerson.edges.map((edge, i) => {
                        const now = new Date();
                        const date = now.getDate();

                        if ((date - 1 - i) % data.allContentfulPerson.edges.length  === 0) {
                            return (
                                <div className={authorOfDayStyles.post} key={edge.node.name+edge.node.node_locale} id={edge.node.name+edge.node.node_locale}>
                                    <img src={edge.node.photo.file.url} alt={edge.node.name}></img>
                                    <div className={authorOfDayStyles.info}>
                                        <p className={authorOfDayStyles.name}>{edge.node.name}</p>
                                        <p>{edge.node.activity.activity}</p>
                                        <Link to={`/directors/${edge.node.slug}`}>
                                            <span>Read</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </React.Fragment>
             )
}   

export default AuthorOfDay