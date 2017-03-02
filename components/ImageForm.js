import React, { PropTypes } from 'react';
import { View, Text, TextInput,
         Alert, AsyncStorage, TouchableOpacity,
         StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Image from 'react-native-image-progress';
import moment from 'moment';
import Colors from '../constants/Colors';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);

    this.savingAttempt = this.savingAttempt.bind(this);
    this.updateTextCaptionValue = this.updateTextCaptionValue.bind(this);
    // it's not necessary to bind savePhoto
  }

  updateTextCaptionValue(caption) {
    this.props.setCaption(caption);
  }

  savingAttempt() {
    Alert.alert(
      'Really want to save that picture?',
      null,
      [
        { text: 'Save', onPress: () => this.savePhoto() },
        { text: 'Cancel', onPress: () => null, style: 'cancel' },
      ],
    );
  }

  savePhoto() {
    // Set default caption if empty
    if (!this.props.caption) this.props.setCaption('Funny text goes here 😁');

    /**
    YOUR ASSIGNMENT:
      Use AsyncStorage to save the photo and its caption.

      As 'value' we will have an image object
      with 'uri' and 'caption' attributes
    */
  }

  goToGallery() {
    this.props.navigation.navigate('GalleryTab');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Write a caption..."
              onChangeText={this.updateTextCaptionValue}
              value={this.props.caption}
              autoCorrect={false}
            />

            <TouchableOpacity
              style={styles.shareTextContainer}
              onPress={this.savingAttempt}
            >
              <Text style={styles.shareText}>
                Share
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.image}
            source={{ uri: this.props.photo.uri }}
          />
        </View>
      </View>
    );
  }
}

ImageForm.propTypes = {
  setCaption: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    flexDirection: 'column',
  },

  loadingIndicator: {
    marginRight: 15,
  },

  imageContainer: {
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },

  formContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    height: 40,
    fontSize: 13,
    padding: 10,
  },

  inputContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shareTextContainer: {
    justifyContent: 'center',
    padding: 10,
  },

  shareText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  image: {
    height: 280,
  },
});

export default withNavigation(ImageForm);
