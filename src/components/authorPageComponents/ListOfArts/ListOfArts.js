import React from 'react'

import artsListStyle from './ListOfArts.module.scss';

class ListOfArts extends React.Component {
    render() {
        return(
            <>
            <h3 id="Repertoire" className={artsListStyle.artsList_title}>Artist works</h3>
            <table>
                <thead>
                    <tr>
                        <th className={artsListStyle.artsList_th}>Date of creation</th>
                        <th className={artsListStyle.artsList_th}>Art</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.artsArrayOfObject.map((edge) => {
                    return (
                        <tr key={edge.id+edge.art}>
                            <td className={artsListStyle.artsList_td_time}>{edge.time}</td>
                            <td className={artsListStyle.artsList_td}>{edge.art}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table> 
            </>
        )
    }
}
  
export default ListOfArts