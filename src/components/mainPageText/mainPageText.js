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

              <p className="text-justify">Today the country boasts a diverse range of theatre and drama:</p>
              <ul>
                <li>
              puppet theatres can be found in most towns, and are hugely popular with children and
              adults alike;
                </li>
                <li>
              professional theatre companies are active across Belarus, many of them dating back to
              the early 20th century;

                </li>
                <li>opera – every major town has its own opera house;</li>
                <li>
              ballet has been very popular in Belarus since the 18th century, and most towns
              have their own ballet; the National Academic Bolshoi Theatre of Ballet of
              the Republic of Belarus has an excellent reputation.

                </li>
              </ul>

              <p className="text-justify">
            In Belarus there are 28 professional theatres: 19 Drama and Music,
            8 children's and young audience,
            1 Opera and Ballet theatre. The year of 2016 saw almost
            1.7 million of theatre attendances.
              </p>

              <p className="text-justify">
            This cultural portal is devoted to the most significant personalities of Belarusian
            theatre history – famous directors, organizers of theatrical affairs, actors.
              Here you can find information about their life events, work activity, achievements
            and take a look at their photos.
              </p>
            </div>


        </>
    )

}
export default IndexPage