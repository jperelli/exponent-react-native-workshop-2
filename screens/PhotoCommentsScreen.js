import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { Foundation } from '@exponent/vector-icons';
import Colors from '../constants/Colors';
import PhotoComments from '../components/PhotoComments';

const PhotoCommentsScreen = () => (
  <View style={styles.container}>
    <PhotoComments />

    {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
  </View>
);

PhotoCommentsScreen.navigationOptions = {
  header: {
    title: 'Comments',
    tintColor: Colors.rmotrC,
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
  },
});

export default PhotoCommentsScreen;
