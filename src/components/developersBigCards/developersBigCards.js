import React from 'react'
import { Card, Accordion, Media, Table } from 'react-bootstrap';

const DevBigCards = ({ data }) => {
  return(
    <>
      {data.allContentfulDevelopersInfo.edges.map((edge) => {
        return(
          <Card bg="light" key={edge.node.name+edge.node.node_locale+"big"} className="mb-5">
            <Card.Header>
              <Card.Title>
                <h2>{edge.node.name}</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">The man who did everything for this project</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Media>
                <img
                width={128}
                height={128}
                src={edge.node.avatar.file.url}
                alt={edge.node.name}
                className="align-self-start mr-3"
                />
                <Media.Body>
                  <p>A short description of the work: the general impressions, the problems encountered, the list of solved tasks (just a listing).
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo ratione. Impedit, pariatur fugit nam optio unde doloremque architecto. Quas deserunt distinctio eum ea. Voluptates placeat commodi ea cumque facere?
                  </p>
                </Media.Body>
              </Media>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Work-log
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Time spent</th>
                            <th>Feature</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jul 27</td>
                            <td>Jul 28</td>
                            <td>16h</td>
                            <td>create base structure</td>
                          </tr>
                          <tr>
                            <td>Jul 27</td>
                            <td>Jul 28</td>
                            <td>16h</td>
                            <td>create base structure</td>
                          </tr>
                          <tr>
                            <td>Jul 27</td>
                            <td>Jul 28</td>
                            <td>16h</td>
                            <td>create base structure</td>
                          </tr>
                          <tr>
                            <td>Jul 27</td>
                            <td>Jul 28</td>
                            <td>16h</td>
                            <td>create base structure</td>
                          </tr>
                          <tr>
                            <td>Jul 27</td>
                            <td>Jul 28</td>
                            <td>16h</td>
                            <td>create base structure</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    PR list and activity
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Maybe use github api or just add in CMS links + images.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

export default DevBigCards
