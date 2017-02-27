import React from 'react';
import { View, Alert, AsyncStorage,
         Platform, StatusBar,
         Text, StyleSheet } from 'react-native';
import { Permissions, Util, Location, Constants } from 'exponent';
import { FontAwesome } from '@exponent/vector-icons';
import { map, includes } from 'lodash';
import Colors from '../constants/Colors';
import googleConfig from '../constants/Google';
import ProfileCard from '../components/ProfileCard';
import OptionItem from '../components/OptionItem';

class ProfileScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      locationName: null,
      lat: null,
      lng: null,
      locale: null,
      deviceInfo: null,
      facebookName: null,
      facebookEmail: null,
      facebookPicture: null,
    };

    this.getLocale = this.getLocale.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.facebookLogin = this.facebookLogin.bind(this);
  }

  getLocale() {
    Util.getCurrentLocaleAsync()
    .then((response) => {
      this.setState({
        locale: response,
      });
    });
  }

  getPosition() {
    const options = {
      enableHighAccuracy: true,
    };

    Permissions.getAsync(Permissions.LOCATION)
    .then((response) => {
      const { status } = response;

      if (status === 'denied') {
        Alert.alert('Please allow Location permission from your phone configuration');
      } else {
        Permissions.askAsync(Permissions.LOCATION)
        .then((res) => {
          const { status } = res;

          if (status === 'granted') {
            Location.getCurrentPositionAsync(options)
            .then((response) => {
              const infoUrl = googleConfig.getInfoUrl(response.coords.latitude, response.coords.longitude);

              return fetch(infoUrl)
              .then(resp => resp.json())
              .then((json) => {
                const [locationInfo] = json.results;
                let locality;
                let country;

                map(locationInfo.address_components, (component) => {
                  if (includes(component.types, 'locality')) {
                    locality = component.long_name;
                  } else if (includes(component.types, 'country')) {
                    country = component.long_name;
                  }
                });

                this.setState({
                  locationName: `${locality}, ${country}`,
                  lat: locationInfo.geometry.location.lat,
                  lng: locationInfo.geometry.location.lng,
                });
              });
            });
          }
        });
      }
    });
  }

  facebookLogin() {

  }

  clearAsyncStorage() {
    Alert.alert(
      'You will clear all data',
      'This action cannot be undone',
      [
        { text: 'Cancel', onPress: () => {} },
        { text: 'OK', onPress: () => AsyncStorage.clear() },
      ],
    );
  }

  render() {
    const { isDevice, deviceName, deviceYearClass, exponentVersion } = Constants;

    return (
      <View style={styles.container}>
        <ProfileCard
          name={this.state.facebookName}
          picture={this.state.facebookPicture}
          email={this.state.facebookEmail}
        />

        <OptionItem
          text={this.state.facebookName ? `Hello ${this.state.locale}` : 'Login with Facebook'}
          icon={'facebook'}
          iconColor={Colors.primary}
          onPress={this.facebookLogin}
          marginBottom={10}
        />

        <OptionItem
          text={this.state.locale ? `Current locale: ${this.state.locale}` : 'Get device locale'}
          icon={'globe'}
          iconColor={Colors.success}
          onPress={this.getLocale}
          marginBottom={10}
        />

        <OptionItem
          text={this.state.locationName || 'Get my position'}
          icon={'map-marker'}
          iconColor={Colors.warning}
          onPress={this.getPosition}
          marginBottom={10}
        />

        <OptionItem
          text={'Clear async storage data'}
          icon={'remove'}
          iconColor={Colors.danger}
          onPress={this.clearAsyncStorage}
          marginBottom={40}
        />

        <View style={styles.infoBlock}>
          <Text>{`Is device?: ${isDevice}`}</Text>
          <Text>{`Device name/year: ${deviceName}/${deviceYearClass}`}</Text>
          <Text>{`Exponent version: ${exponentVersion}`}</Text>
        </View>

        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  header: {
    title: 'Profile',
    tintColor: Colors.rmotrC,
    style: {
      backgroundColor: Colors.rmotrB,
    },
  },
  tabBar: {
    label: 'Profile',
    icon: ({ tintColor }) => (
      <FontAwesome
        name={'user'}
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  infoBlock: {
    backgroundColor: '#CCC',
    padding: 10,
  },
});

export default ProfileScreen;
