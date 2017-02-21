import React, { PropTypes } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Foundation } from '@exponent/vector-icons';
import { ImagePicker, Components } from 'exponent';
import Colors from '../constants/Colors';

class CameraOpenRoll extends React.Component {
  constructor(props) {
    super(props);

    this.showRoll = this.showRoll.bind(this);
  }

  showRoll() {
    const imagePickerConfig = {
      allowsEditing: true,
      aspect: [1, 1],
    };

    ImagePicker.launchImageLibraryAsync(imagePickerConfig)
      .then((result) => {
        this.props.setPhoto(result);
      });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={this.showRoll}>
          <Components.LinearGradient
            colors={[Colors.rmotrB100, Colors.rmotrB300, Colors.rmotrB]}
            style={styles.linearGradient}
          >
            <Foundation
              style={styles.icon}
              name="photo"
            />
          </Components.LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

CameraOpenRoll.propTypes = {
  setPhoto: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Colors.rmotrB,
  },

  linearGradient: {
    alignItems: 'center',
  },

  iconContainer: {
    backgroundColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 38,
    padding: 5,
  },
});

export default CameraOpenRoll;
