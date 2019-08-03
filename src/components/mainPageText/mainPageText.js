import React from 'react'
import { useStore } from "../../store/useStore"

import localization from '../../localization/localization'

const IndexPage = () => {
    const { state } = useStore();
    
    return(
        <>
        <div className="mt-5">
              <h1 className="text-center">{localization[state.language].theatreDirectors}</h1>

              <p className="text-justify">
                {localization[state.language].mainText.p1}
              </p>

              <p className="text-justify">{localization[state.language].mainText.p2}</p>
              <ul>
                <li>
                  {localization[state.language].mainText.li1}
                </li>
                <li>
                    {localization[state.language].mainText.li2}
                </li>
                <li>
                    {localization[state.language].mainText.li3}
                </li>
                <li>
                    {localization[state.language].mainText.li4}
                </li>
              </ul>

              <p className="text-justify">
                {localization[state.language].mainText.p3}
              </p>

              <p className="text-justify">
                {localization[state.language].mainText.p3}
              </p>
            </div>


        </>
    )

}
export default IndexPage