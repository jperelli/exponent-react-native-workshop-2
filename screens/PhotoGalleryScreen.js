import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { Foundation } from '@exponent/vector-icons';
import Colors from '../constants/Colors';
import BillabongHeader from '../components/BillabongHeader';
import PhotoList from '../components/PhotoList';

const PhotoGalleryScreen = () => (
  <View style={styles.container}>
    <PhotoList />

    {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
  </View>
);

PhotoGalleryScreen.navigationOptions = {
  header: {
    title: (<BillabongHeader headerText={'Rmotrgram'} />),
    style: {
      backgroundColor: Colors.rmotrB,
    },
  },
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
});

export default PhotoGalleryScreen;
