import React from 'react'
import {
  Table
} from 'react-bootstrap';

import artsListStyle from './ListOfArts.module.scss';

class ListOfArts extends React.Component {
    render() {
      const { artsArrayOfObject } = this.props
        return(
          <>
            <h3 id="Repertoire" className={artsListStyle.artsList_title}>Artist works</h3>
            <Table striped bordered hover className="mb-5">
              <thead>
                <tr>
                  <th className={artsListStyle.artsList_th}>Date of creation</th>
                  <th className={artsListStyle.artsList_th}>Art</th>
                </tr>
              </thead>
              <tbody>
                {artsArrayOfObject.map((edge) => {
                    return (
                      <tr key={edge.id+edge.art}>
                        <td className={artsListStyle.artsList_td_time}>{edge.time}</td>
                        <td className={artsListStyle.artsList_td}>{edge.art}</td>
                      </tr>
                    )
                })}
              </tbody>
            </Table>
          </>
        )
    }
}

export default ListOfArts
