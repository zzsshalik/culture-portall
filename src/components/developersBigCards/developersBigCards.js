import React from 'react'
import { Card, Media, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

const DevBigCards = ({ data }) => {
  return(
    <>
      {data.allContentfulDevelopersInfo.edges.map((edge) => {
        return(
          <Card bg="light" key={edge.node.name+edge.node.node_locale+"big"} className="border-info mb-5">
            <Card.Header>
              <Card.Title>
                <h2>{edge.node.name}</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{edge.node.shortDescription.shortDescription}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Media className="align-items-center justify-content-center flex-wrap">
                <img
                  width={128}
                  height={128}
                  src={edge.node.avatar.file.url}
                  alt={edge.node.name}
                  className="ml-4 mr-4"
                />
                <Media.Body>
                  <p className="ml-4 mr-4">{edge.node.longDescription.longDescription}</p>
                </Media.Body>
              </Media>
              
              <Card>
                <h4 className="text-center mt-3">Worklog</h4> 
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">Start time</th>
                        <th className="text-center">End time</th>
                        <th className="text-center">Time spent</th>
                        <th className="text-center">Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {edge.node.features.map((item) => {
                        return (
                          <tr key={item.id+item.feature+edge.node.name}>
                            <td className="text-center">{item.start}</td>
                            <td className="text-center">{item.end}</td>
                            <td className="text-center">{item.spent}</td>
                            <td>{item.feature}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </div>             
                  
              </Card>
              <Card className="text-center">
                <h4 className="text-center mt-4">PR list and activity</h4>  
                <Media className="align-items-center flex-wrap">
                  <img
                    width={360}
                    height={192}
                    src={edge.node.contributionImg.file.url}
                    alt={edge.node.contributionImg.title}
                    className="ml-2 mr-2"
                  />
                  <Media.Body>
                    <a className="ml-5 mr-5" href={edge.node.prList[0].link} target='_blank' rel='noopener noreferrer'>Link to PRs</a>
                  </Media.Body>
                </Media>
              </Card>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

DevBigCards.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default DevBigCards
