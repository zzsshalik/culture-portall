import React from 'react'

import style from './ListOfArts.module.scss';

class ListOfArts extends React.Component {
    render() {
        return(
            <>
            <h3>Artist works</h3>
            <table>
                <tr>
                    <th>Date of creation</th>
                    <th>Art</th>
                </tr>
                {this.props.artsArrayOfObject.map((edge) => {
                    return (
                        <tr>
                            <td>{edge.time}</td>
                            <td>{edge.art}</td>
                        </tr>
                    )
                })}
            </table> 
            </>
        )
    }
}
  
export default ListOfArts