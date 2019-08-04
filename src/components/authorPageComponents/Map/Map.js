import React from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps"
import PropTypes from 'prop-types'

const MyMapComponent = ({
  mapState,
  markGeometry,
  ...rest
}) => (
  <YMaps>
    <Map id="AMap" state={mapState} {...rest}>
      {markGeometry.map(coordinate => (
        <Placemark
          key={coordinate.Latitude+coordinate.Longitude}
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

MyMapComponent.propTypes = {
  mapState: PropTypes.objectOf(PropTypes.any).isRequired,
  markGeometry: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default MyMapComponent
