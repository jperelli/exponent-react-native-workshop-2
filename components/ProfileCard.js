import React, { PropTypes } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Components } from 'exponent';
import Image from 'react-native-image-progress';
import Colors from '../constants/Colors';

const ProfileCard = props => (
  <ScrollView>
    <Components.LinearGradient
      colors={[Colors.rmotrB300, Colors.rmotrB100]}
      style={styles.viewStyle}
    >
      <Image
        style={styles.image}
        source={{ uri: props.picture || 'https://randomuser.me/api/portraits/lego/1.jpg' }}
        alt={'Image'}
      />

      <Text style={styles.username}>
        {props.name || 'Anonymous'}
      </Text>

      <Text style={styles.email}>
        {props.email || 'anonymous@rmotr.com'}
      </Text>
    </Components.LinearGradient>
  </ScrollView>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFF',
    marginBottom: 10,
  },

  username: {
    color: '#FFF',
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: '700',
  },

  email: {
    color: '#EEE',
    backgroundColor: 'transparent',
    fontSize: 12,
  },
});

export default ProfileCard;
