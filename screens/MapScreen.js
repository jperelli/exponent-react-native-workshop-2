import React, { PropTypes } from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { Foundation } from '@exponent/vector-icons';
import Colors from '../constants/Colors';
import Map from '../components/Map';
import PhotoGrid from '../components/PhotoGrid';

const MapScreen = props => (
  <View style={styles.container}>
    <Map
      latitude={props.navigation.state.params.latitude}
      longitude={props.navigation.state.params.longitude}
    />

    <PhotoGrid />

    {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
  </View>
);

MapScreen.navigationOptions = {
  header: ({ state }) => ({
    title: `${state.params.locationName}`,
    tintColor: Colors.rmotrC,
    style: {
      backgroundColor: Colors.rmotrB,
    },
  }),
  tabBar: {
    label: 'Gallery',
    icon: ({ tintColor }) => (
      <Foundation
        name={'home'}
        size={26}
        color={tintColor}
      />
    ),
  },
};

MapScreen.propTypes = {
  route: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  placeholder: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'lightgreen',
  },
  placeholderText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MapScreen;
