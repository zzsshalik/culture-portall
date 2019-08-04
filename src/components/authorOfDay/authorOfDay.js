import React from 'react'
import { Link } from 'gatsby'
import {
  Card,
  Media,
  Button,
} from 'react-bootstrap';

import authorOfDayStyles from './authorOfDay.module.scss'


const AuthorOfDay  = ({ data }) => {
  return(
    <>
      {data.allContentfulPerson.edges.sort((a, b) => {
        const nameA = a.node.name
        const nameB = b.node.name
        return (nameA < nameB) ? -1: 1;
      }).map((edge, i) => {
        const now = new Date();
        const date = now.getDate();

        if ((date - 1 - i) % data.allContentfulPerson.edges.length  === 0) {
          return (
            <Card
              bg="light"
              className={authorOfDayStyles.card}
              key={edge.node.name + edge.node.node_locale}
              id={edge.node.name + edge.node.node_locale}
            >
              <Card.Header>
                <Card.Title>
                  <h2 className="text-center mb-0">Person of the day</h2>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Media className={authorOfDayStyles.mediaCard}>
                  <img
                    width={150}
                    height={150}
                    src={edge.node.photo.file.url}
                    alt={edge.node.name}
                    className="align-self-start mr-3 mb-0"
                  />
                  <Media.Body className="col justify-content-between text-center">
                    <h3>{edge.node.name}</h3>
                    <p>{edge.node.activity.activity}</p>
                    <Button
                      variant="outline-dark"
                      as={Link}
                      to={`/directors/en-US/${edge.node.slug}`}
                      className="mt-3"
                      block
                    >
                  Read
                    </Button>
                  </Media.Body>
                </Media>
              </Card.Body>
            </Card>
          );
          }
      })}
    </>
  )
}

export default AuthorOfDay
