import React from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps"

const MyMapComponent = ({
  mapState,
  markGeometry,
  mapHintContent,
  mapBalloonContent,
  ...rest
}) => (
  <YMaps>
    <Map state={mapState} {...rest}>
      {markGeometry.map(coordinate => (
        <Placemark
          geometry={coordinate.markGeometry}
          properties={{
            hintContent: `${coordinate.mapHintContent}`,
            balloonContent: `${coordinate.mapBalloonContent}`,
          }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        />
      ))}
    </Map>
  </YMaps>
)

export default MyMapComponent
