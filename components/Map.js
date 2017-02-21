import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Components } from 'exponent';

const Map = props => (
  <Components.MapView
    style={styles.mapView}
    initialRegion={{
      latitude: props.latitude,
      longitude: props.longitude,
      latitudeDelta: 0.15,
      longitudeDelta: 0.08,
    }}
  >
    <Components.MapView.Marker
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
    />
  </Components.MapView>
);

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export default Map;
