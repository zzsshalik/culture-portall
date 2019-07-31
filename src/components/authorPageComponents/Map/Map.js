import React from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps"

const MyMapComponent = ({
  mapState,
  markGeometry,
  ...rest
}) => (
  <YMaps>
    <Map state={mapState} {...rest}>
      {markGeometry.map(coordinate => (
        <Placemark
         geometry={[Number.parseInt(coordinate.Latitude),Number.parseInt(coordinate.Longitude)]}
          properties={{
            hintContent: `${coordinate.place}`,
            balloonContent: `${coordinate.place}`,
          }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        />
      ))}
    </Map>
  </YMaps>
)

export default MyMapComponent
