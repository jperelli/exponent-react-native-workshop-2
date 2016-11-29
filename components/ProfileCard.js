import React, { PropTypes } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Components } from 'exponent';
import Image from 'react-native-image-progress';
import Colors from '../constants/Colors';

const ProfileCard = () => (
  <ScrollView>
    <Components.LinearGradient
      colors={[Colors.rmotrB300, Colors.rmotrB100]}
      style={styles.viewStyle}
    >
      <Image
        style={styles.image}
        source={{ uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }}
        alt={'Image'}
      />

      <Text style={styles.username}>
        Anonymous
      </Text>

      <Text style={styles.email}>
        anonymous@rmotr.com
      </Text>
    </Components.LinearGradient>
  </ScrollView>
);

ProfileCard.propTypes = {
  auth: PropTypes.object
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFF',
    marginBottom: 10
  },

  username: {
    color: '#FFF',
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: '700'
  },

  email: {
    color: '#EEE',
    backgroundColor: 'transparent',
    fontSize: 12
  }
});

export default ProfileCard;
